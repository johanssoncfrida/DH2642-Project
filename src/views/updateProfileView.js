import { NavLink } from "react-router-dom";

const UpdateProfileView = ({
    profile,
    username,
    favoriteActor,
    gender,
  handleUpdate,
  handleChange,
  handleChangeRadio,
  authError,
}) => {
  return (
      
    <div className="card" id="profile">
        <form onSubmit={(e) => handleUpdate(e)}>
            <div className="card-action right-align">
            <NavLink to="/profile" className="btn orange">
                X
            </NavLink>
            </div>
            
            <div className="card-content light">
            <div className="card grey lighten-4 horizontal">

            <div className="black-text card-content">
        
            <h6>Current username: {profile.username}</h6>
            <div className="change input-field">New username: 
          <input
            placeholder={username}
            type="text"
            id="username"
            onChange={(e) => handleChange(e)}
          />
        </div>
            <br />
            <h6>Current favorite actor: {profile.favoriteActor}</h6>
            <div className="input-field">
          <select
            className="browser-default"
            id="favoriteActor"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Favorite Actor</option>
            <option value="Leonardo DiCaprio">Leonardo Dicaprio</option>
            <option value="Meryl Streep">Meryl Streep</option>
            <option value="Ian McKellen">Ian McKellen</option>
            <option value="Morgan Freeman">Morgan Freeman</option>
            <option value="Kate Winslet">Kate Winslet</option>
            <option value="Other">Other</option>
          </select>
        </div>
            <br />
            <h6>Current gender: {profile.gender}</h6>
            <div
          action="#"
          className="radio"
          onChange={(e) => handleChangeRadio(e)}
        >
          <p>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="Male"
              />
              <span>Male</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="Female"
              />
              <span>Female</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="Other"
              />
              <span>Other</span>
            </label>
          </p>
        </div>

            <br />
            
        </div>
      </div>

    </div>
    <div className="card-action right-align">
    <div className="input-field">
        <button onClick={(e) => handleUpdate(e)}>
        <NavLink to="/profile" className="btn-small orange">
        Update profile
      </NavLink>
      </button>
    </div>
    </div>
      </form>
  </div>


  )};
export default UpdateProfileView;
