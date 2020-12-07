const HighScoreView = ({ items }) => {
  return (
    <div className="card " id="HighscoreBoard">
      <div className="card-content" id="Highscore">
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
            {console.log(items)}
            {items.map((hs, index) => (
              <tr key={index}>
                <td>{hs.username}</td>
                <td>{hs.quizScore} p</td>
                <td>{hs.time} s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScoreView;
