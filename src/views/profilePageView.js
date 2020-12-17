import { NavLink } from "react-router-dom";

const ProfilePageView = ({
  profile,
  highscorelist,
  image,
  handleUsernameChange,
  handleFavoriteActorChange,
  handleSubmit,
  setModal,
}) => {
  return (
    <div className="card" id="profile">
      <div className="card-action right-align">
        <NavLink
          to="/beforequiz"
          className="btn-small orange"
          id="buttonInProfileX"
        >
          X
        </NavLink>
        <a className="btn-small orange modal-trigger" href="#modal1">
          Edit profile
        </a>
        <div
          ref={(m) => {
            setModal(m);
          }}
          id="modal1"
          className="modal "
        >
          <div className="modal-content">
            <div className="card-content light">
              <h2 className="orange-text left-align">Edit profile</h2>
              <div className="card grey lighten-4 horizontal">
                <div className="black-text card-content left-align">
                  <br />
                  <h6>Current username: {profile.username}</h6>
                  <div className="change input-field">
                    New username:
                    <input
                      placeholder={profile.username}
                      type="username"
                      id="username"
                      onChange={(e) => handleUsernameChange(e)}
                    />
                  </div>

                  <br />
                  <h6>Current favorite actor: {profile.favoriteActor}</h6>
                  <div className="input-field">
                    New favorite actor:
                    <input
                      placeholder={profile.favoriteActor}
                      type="favoriteactor"
                      id="favoriteactor"
                      onChange={(e) => handleFavoriteActorChange(e)}
                    />
                  </div>
                  <button onClick={(e) => handleSubmit(e)}>Save info</button>
                  <a
                    href="#!"
                    className="modal-close waves-effect waves-green orange btn-flat white-text"
                    id="closebutton"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
