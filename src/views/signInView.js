const SignInView = ({ handleChange, handleSubmit, authError }) => {
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
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
          <button className="btn red darken-4 z-depth-0">Sign In</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInView;
