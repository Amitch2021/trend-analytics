import React from 'react';
import data from './data/data.json';
import './styles/global.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="TREND Logo" className="h-08 drop-shadow-xl" />

        <button className="account-btn">Account</button>
      </header>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Player</th><th>Pos</th><th>Matchup</th><th>Score</th><th>3G Avg</th><th>Last</th><th>Opp Avg</th><th>Delta</th><th>Prop</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, i) => (
              <tr key={i} className={p.player === 'LOCKED' ? 'locked' : p.score >= 85 ? 'highlight' : ''}>
                <td>{p.player}</td>
                <td>{p.position}</td>
                <td>{p.matchup}</td>
                <td>{p.score ?? '--'}</td>
                <td>{p.avg3 ?? '--'}</td>
                <td>{p.last ?? '--'}</td>
                <td>{p.oppAvg ?? '--'}</td>
                <td>{p.delta ?? '--'}</td>
                <td>{p.prop ?? '--'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="unlock">
        <button>🔓 Unlock Full Rankings</button>
      </div>
    </div>
  );
};

export default App;