const SignUpView = ({
  handleSubmit,
  handleChange,
  handleChangeRadio,
  authError,
}) => {
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <p className="grey-text text-darken-2">
          Please do not use your real email address or password.
        </p>

        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Username"
            type="text"
            id="username"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="input-field">
          <select
            className="browser-default"
            id="favoriteActor"
            onChange={(e) => handleChange(e)}
            required
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
                required
              />
              <span>Male</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="female"
              />
              <span>Female</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="gender"
                type="radio"
                value="other"
              />
              <span>Other</span>
            </label>
          </p>
        </div>

        <p className="grey-text text-darken-2">All fields are required.</p>

        <div className="input-field">
          <button className="btn red darken-4 z-depth-0">Sign up</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUpView;
