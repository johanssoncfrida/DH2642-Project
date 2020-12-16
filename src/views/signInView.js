import { NavLink } from "react-router-dom";

const SignInView = ({ handleChange, handleSubmit, authError }) => {
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <div className="card-action right-align">
          <NavLink to="/" className="btn-small orange">
            X
          </NavLink>
        </div>
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn red darken-4 z-depth-0">Log In</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
        <div className="center">Need an account? <NavLink to="/signup" className="red-text text-darken-2">Sign up</NavLink></div>
      </form>
    </div>
  );
};

export default SignInView;
