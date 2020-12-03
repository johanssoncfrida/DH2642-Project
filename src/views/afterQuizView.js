import { NavLink } from "react-router-dom";

const AfterQuizView = (score, username, handleStart) => {
  return (
    <div className="afterQuiz container white-text">
      <div className="row center" id="textdivInAfterquiz">
        <h3 className="header col s12 " id="textAfterquiz">
          Good job {username}, this is your result!
        </h3>

        <div className="row center " id="textAfterquiz">
          <h4> {score}/10 points!</h4>

          <br />
        </div>
      </div>
      <div className="row center" id="textAfterquiz">
        <h4>You can do better!</h4>
        <NavLink to="/quiz"
          className="btn btn-large floating red darken-4 pulse"
          onClick={() => handleStart()}
        >
          Try again!
        </NavLink>
      </div>
    </div>
  );
};

export default AfterQuizView;
