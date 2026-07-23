import crypto from 'node:crypto';
import path from 'node:path';
import process from 'node:process';
import { DatabaseSync } from 'node:sqlite';
import { emitKeypressEvents } from 'node:readline';
import { createInterface } from 'node:readline/promises';

const passwordPolicyError = password => {
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Z]/.test(password)) return 'Password needs one uppercase letter.';
  if (!/[a-z]/.test(password)) return 'Password needs one lowercase letter.';
  if (!/\d/.test(password)) return 'Password needs one number.';
  if (!/[^A-Za-z0-9]/.test(password)) return 'Password needs one special character.';
  return '';
};

const hashPassword = (password, salt = crypto.randomBytes(16).toString('hex')) => {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
};

const readHidden = prompt => new Promise((resolve, reject) => {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    reject(new Error('A secure interactive terminal is required.'));
    return;
  }
  emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdout.write(prompt);
  let value = '';
  const cleanup = () => {
    process.stdin.off('keypress', onKeypress);
    process.stdin.setRawMode(false);
    process.stdin.pause();
    process.stdout.write('\n');
  };
  const onKeypress = (character, key) => {
    if (key?.ctrl && key.name === 'c') {
      cleanup();
      reject(new Error('Cancelled.'));
      return;
    }
    if (key?.name === 'return') {
      cleanup();
      resolve(value);
      return;
    }
    if (key?.name === 'backspace') {
      value = value.slice(0, -1);
      return;
    }
    if (!key?.ctrl && !key?.meta && character) value += character;
  };
  process.stdin.on('keypress', onKeypress);
});

const promptUsername = async () => {
  const terminal = createInterface({ input: process.stdin, output: process.stdout });
  const username = (await terminal.question('New admin username: ')).trim();
  terminal.close();
  return username;
};

const main = async () => {
  const username = await promptUsername();
  if (!username) throw new Error('Username is required.');
  const password = await readHidden('New admin password: ');
  const policyError = passwordPolicyError(password);
  if (policyError) throw new Error(policyError);
  const confirmation = await readHidden('Confirm new password: ');
  if (password !== confirmation) throw new Error('Password confirmation does not match.');

  const database = new DatabaseSync(path.join(process.cwd(), 'data', 'app.sqlite'));
  const admin = database.prepare("SELECT id FROM auth_users WHERE role = 'admin' LIMIT 1").get();
  if (!admin) throw new Error('No admin account exists. Start the server once with ADMIN_PASSWORD configured.');

  database.exec('BEGIN IMMEDIATE');
  try {
    database.prepare(`
      UPDATE auth_users
      SET username = ?, name = ?, password_hash = ?, status = 'approved', enabled = 1
      WHERE id = ?
    `).run(username, username, hashPassword(password), admin.id);
    database.prepare(`
      INSERT INTO secure_settings (key, value, updated_at)
      VALUES ('auth_session_key', ?, ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
    `).run(JSON.stringify(crypto.randomBytes(32).toString('hex')), Date.now());
    database.prepare("DELETE FROM secure_settings WHERE key = 'admin_password_env_fingerprint'").run();
    database.exec('COMMIT');
  } catch (error) {
    database.exec('ROLLBACK');
    throw error;
  } finally {
    database.close();
  }
  console.log(`Admin credentials reset for "${username}". Restart the server to apply the new session key.`);
};

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
