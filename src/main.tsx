import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Theme = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <main className={theme}>
      <div className="theme-toggle">
        <button className="btn" type="button" onClick={() => setTheme('dark')}>Dark Mode</button>
        <button className="btn" type="button" onClick={() => setTheme('light')}>Light Mode</button>
      </div>

      <div className="dashboard">
        <div className="card">
          <h3>Major Markets</h3>
          <p>BTC/USDT: <span className="price down">$78,310 (-1.19%)</span></p>
          <p>ETH/USDT: <span className="price down">$2,179.91 (-1.95%)</span></p>
          <p>BNB/USDT: <span className="price down">$656.43 (-2.45%)</span></p>
          <p>SOL/USDT: <span className="price down">$86.57 (-2.74%)</span></p>
        </div>

        <div className="card">
          <h3>Fear &amp; Greed</h3>
          <p>Now: Fear (31)</p>
        </div>

        <div className="card">
          <h3>Decision Inputs</h3>
          <ul className="list">
            <li>BTC Dominance: 58.34%</li>
            <li>Funding Rate: 0.0000%</li>
            <li>Open Interest: $7.98B</li>
            <li>Volume Surge: 0.12x</li>
            <li>Market Breadth: 24%</li>
            <li>Stablecoin Flow: $368.14M</li>
          </ul>
        </div>

        <div className="card">
          <h3>Top Gainers</h3>
          <ul className="list">
            <li>OSMO/USDT <span className="up">+22.83%</span></li>
            <li>UTK/USDT <span className="up">+16.23%</span></li>
            <li>PHB/USDT <span className="up">+12.16%</span></li>
            <li>NMR/USDT <span className="up">+9.36%</span></li>
            <li>QNT/USDT <span className="up">+8.62%</span></li>
            <li>ZB/USDT <span className="up">+7.70%</span></li>
          </ul>
        </div>

        <div className="card">
          <h3>Top Losers</h3>
          <ul className="list">
            <li>AZ/USDT <span className="down">-53.85%</span></li>
            <li>SXP/USDT <span className="down">-45.00%</span></li>
            <li>DENT/USDT <span className="down">-36.67%</span></li>
            <li>FIO/USDT <span className="down">-34.27%</span></li>
            <li>CGPT/USDT <span className="down">-23.20%</span></li>
            <li>RDN/USDT <span className="down">-19.41%</span></li>
          </ul>
        </div>

        <div className="card wide">
          <h3>Top Market Cap</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>BTC</td><td>$78,292</td><td className="down">-1.19%</td><td>$1.567T</td></tr>
              <tr><td>2</td><td>ETH</td><td>$2,180.62</td><td className="up">+1.43%</td><td>$263.2B</td></tr>
              <tr><td>3</td><td>USDT</td><td>$0.999615</td><td>+0.01%</td><td>$189.8B</td></tr>
              <tr><td>4</td><td>BNB</td><td>$656.86</td><td className="down">-2.00%</td><td>$98.4B</td></tr>
              <tr><td>5</td><td>XRP</td><td>$1.42</td><td className="down">-2.81%</td><td>$87.6B</td></tr>
              <tr><td>6</td><td>USDC</td><td>$0.998863</td><td>+0.00%</td><td>$77.0B</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card wide">
          <h3>Crypto News Flow</h3>
          <ul className="news">
            <li>Jump Crypto's 'Firedancer' slow &amp; steady rollout</li>
            <li>Crypto users choosing juicy yields, risking hacks</li>
            <li>$293M KelpDAO hack forces DeFi to grow up</li>
            <li>XRP beats bitcoin gains, bull run still needs Congress</li>
            <li>Crypto longs lose $500M as BTC slides</li>
            <li>Bhutan disputes $1B BTC drawdown</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
