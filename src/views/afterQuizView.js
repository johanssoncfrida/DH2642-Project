import { NavLink } from "react-router-dom";

const AfterQuizView = (score, username, handleStart, totalTime) => {
  return (
    <div className=" container  " id="afterQuiz">
      <div className="row " id="textAfterquiz">
        <h3 id="headerAfterquiz">Well done {username}!</h3>

        <div className="row " id="textInAfterquiz">
          <p>Your score: {score} of 10 points!</p>

          <p>Your time: {totalTime} seconds.</p>
        </div>

        <div className="row ">
          <NavLink
            to="/quiz"
            className="btn btn-large "
            id="buttonAfterquiz"
            onClick={() => handleStart()}
          >
            Try again!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AfterQuizView;
