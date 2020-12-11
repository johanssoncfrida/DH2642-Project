import { NavLink } from "react-router-dom";
import image from "../img/MQ-start.png";

const HomePageView = () => {
  return (
    <div className="homepage container">
      <br />
      <br />
      <h1 className="header center">
        <img src={image} alt=""></img>
      </h1>

      <h5 className="center white-text">
        How much do you know about movies? Try your skills in this free quiz!
      </h5>
      <br />
      <br />

      <div className="row">
        <div className="col s6 right-align">
          <NavLink to="/signin" className="btn btn-large orange hoverable">
            Log in
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
