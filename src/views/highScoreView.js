import { NavLink } from "react-router-dom";

const HighScoresView = ({ items }) => {
  return (
    <div className="highscore col">
      <div className="card-panel">
      <div className="card-action right-align">
        <NavLink to="/beforequiz" className="btn-small orange">
          X
        </NavLink>
      </div>
        <h2 className="center orange-text">Highscores</h2>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>User</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {items.map((hs, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{hs.username}</td>
                <td>{hs.quizScore} p</td>
                <td>{hs.time.toFixed(2)} s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScoresView;
