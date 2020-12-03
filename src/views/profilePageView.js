import image from "../img/catprofilepicture.jpeg";

const ProfilePageView = ({ profile, highscores }) => {
  return (
    <div className="card grey lighten-2 ">
      <div className="card-content light">
        <div className="card grey lighten-4 horizontal">
          <div className="card-image">
            <img src={image} id="profilePicture" alt=" " />
          </div>

          <div className="card-content">
            <h6>Username: {profile.username}</h6>
            <br />
            <h6>Favorite Actor: {profile.favoriteActor}</h6>
            <br />
            <h6>Gender: {profile.gender}</h6>
            <br />
          </div>
        </div>

        <div className="card-content">
          <h5>Your personal highscores:</h5>
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
                  <td>{hs.score} p</td>
                  <td>{hs.time}</td>
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
