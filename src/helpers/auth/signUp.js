import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    favoriteActor: "",
    gender: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleChangeRadio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/beforeQuiz" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input
              placeholder="Email"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Username"
              type="text"
              id="username"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <select
              className="browser-default"
              id="favoriteActor"
              defaultValue="default"
              onChange={this.handleChange}
            >
              <option value="default" disabled>
                Favorite Actor
              </option>
              <option value="Leonardo DiCaprio">Leonardo Dicaprio</option>
              <option value="Kate Winslet">Kate Winslet</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div action="#" className="radio" onChange={this.handleChangeRadio}>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="gender"
                  type="radio"
                  value="male"
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

          <div className="input-field">
            <button className="btn red darken-4 z-depth-0">Sign up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
