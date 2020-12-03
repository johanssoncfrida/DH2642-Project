const HighScoreView = ({ highscores }) => {
  return (
    <div className="card grey lighten-2 ">
      <div className="card-content">
        <h4 className="center">Highscore</h4>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {highscores.map((hs, index) => (
              <tr key={index}>
                <td>User {index + 1}</td>
                <td>{hs.score} p</td>
                <td>{hs.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScoreView;
