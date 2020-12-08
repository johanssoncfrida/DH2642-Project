import { NavLink } from "react-router-dom";

const AfterQuizView = (score, username, handleStart, totalTime) => {
  return (
    <div className=" container  " id="afterQuiz">
      <div className="row " id="textAfterquiz">
        <h3 id="headerAfterquiz">MovieQuiziness Result:</h3>

        <br />
        <br />
        <div className="row " id="textInAfterquiz">
          <table>
            <tbody>
              <tr>
                <td>Name: {username}</td>
              </tr>
              <tr>
                <td>Your score: {score} of 10 points!</td>
              </tr>
              <tr>
                <td>Your time: {totalTime} seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
        <div className="row ">
          <NavLink
            to="/quiz"
            className="btn btn-small "
            id="buttonAfterquiz"
            onClick={() => handleStart()}
          >
            Try again!
          </NavLink>
          <NavLink to="/" className="btn btn-small " id="buttonAfterquiz">
            Home
          </NavLink>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AfterQuizView;
