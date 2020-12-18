import { NavLink } from "react-router-dom";

const ProfilePageView = ({ profile, highscorelist, image }) => {
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
        <div className="card-action right-align">
        <NavLink to="/updateProfile" className="btn-small orange">
        Edit profile
      </NavLink>
    </div>

        <div className="card-content">
          <h5>Your three most recent highscores:</h5>
          <table>
            <thead>
              <tr>
                <th>Quizzed at</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {highscorelist.slice(0, 3).map((scores, index) => (
                <tr key={index}>
                  <td>{scores.createdAt}</td>
                  <td>{scores.highscore}</td>
                  <td>{scores.time.toFixed(2)} s</td>
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
