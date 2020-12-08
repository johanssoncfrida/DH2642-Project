const TopScoresView = ({ items }) => {
  return (
    <div className="topscores col">
      <div className="card-panel">
        {/*<h4 className="center"><img src={image} alt=""></img></h4>*/}
        <h2 className="center orange-text">Highscores</h2>
        <table>
          <thead>
            <tr>
              <th>Position</th>
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

export default TopScoresView;
