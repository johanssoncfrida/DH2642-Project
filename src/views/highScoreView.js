const HighScoreView = ({ items }) => {
  return (
    <div>
      <br />
      <br />
    <div className="card ">
      <div className="card-content">
        <h4 className="center">Top 5</h4>
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
                <td>{index + 1}. {hs.username}</td>
                <td>{hs.quizScore} p</td>
                <td>{hs.time} s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default HighScoreView;
