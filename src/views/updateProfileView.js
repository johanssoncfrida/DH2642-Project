import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateProfileView = ({
    profile,
    username,
  handleUpdate,
  handleChange,
  handleChangeRadio,
}) => {
  return (
      
    <div className="card" id="profile">
      <div className="card-action right-align">
        <NavLink to="/profile" className="btn-small orange">
          X
        </NavLink>
      </div>
      
            
      <div className="card-content light">
      <h4 className="orange-text">Edit profile</h4>
      <p>Edit the parts of your profile information that you want to change, if you do not
        want to change a specific part leave it unchanged.
      </p>
      <br />
        <h6>Current username: {profile.username}</h6>
        <div className="change input-field"> 
          <input
            placeholder="New username"
            type="text"
            id="username"
            onChange={(e) => handleChange(e)}/>
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
                value="male"
              />
              <span>male</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="female"
              />
              <span>female</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="other"
              />
              <span>other</span>
            </label>
          </p>
        </div>

            <br />
            <div className="card-action right-align">
            <Link to="/profile" className="btn-small orange" onClick={() => handleUpdate()}>Save Changes</Link>
      </div>


    </div>

    </div>
  )};
export default UpdateProfileView;
