import { NavLink } from "react-router-dom";

const HomePageView = () => {
  return (
    <div className="homepage container">
      <br />
      <br />
      <h1 className="header center orange-text">MovieQuizinezz</h1>
      <div className="row center">
        <h5 className="header col s12 orange-text light">
          Welcome to this quiz!
        </h5>
      </div>
      <div className="row">
        <div className="col s6 right-align">
          <NavLink to="/signin" className="btn btn-large orange hoverable">
            Sign in
          </NavLink>
        </div>
        <div className="col s6 left-align">
          <NavLink
            to="/signup"
            className="btn btn-large waves-effect waves-light orange"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
