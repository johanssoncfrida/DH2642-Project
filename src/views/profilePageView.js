import { NavLink } from "react-router-dom";

const ProfilePageView = ({ profile, highscores, image }) => {
  return (
    <div className="card" id="profile">
      <div className="card-action right-align">
        <NavLink to="/beforequiz" className="btn-small orange">
          X
        </NavLink>
      </div>
      <div className="card-content light">
        <div className="card grey lighten-4 horizontal">
          <div className="card-image">
            <img src={image} id="profilePicture" alt=" " />
          </div>

          <div className="black-text card-content">
            <h6>Username: {profile.username}</h6>
            <br />
            <h6>Favorite Actor: {profile.favoriteActor}</h6>
            <br />
            <h6>Gender: {profile.gender}</h6>
            <br />
          </div>
        </div>

        <div className="card-content">
          <h5>Your top 3 personal highscores:</h5>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {highscores.map((hs, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hs.quizScore} p</td>
                  <td>{hs.time.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageView;
