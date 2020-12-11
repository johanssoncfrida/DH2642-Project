import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/highScore">Highscores</NavLink>
      </li>
      <li>
        <NavLink to="/beforeQuiz">New Quiz</NavLink>
      </li>
      <li>
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/profile" className="btn btn-floating red darken-4">
          <i className="material-icons">person</i>
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
