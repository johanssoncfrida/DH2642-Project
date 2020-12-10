import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
import SignUpView from "../views/signUpView";

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
    return SignUpView({
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleChangeRadio: this.handleChangeRadio,
      authError,
    });
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
