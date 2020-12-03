import { NavLink } from "react-router-dom";

const BeforeQuizView = ({ setModal, handleStart }) => {
  return (
    <div>
      <br />
      <br />
      <h1 className="header center orange-text">Welcome!</h1>
      <br />
      <br />
      <div className="row center">
        <NavLink
          to="/quiz"
          className="btn btn-large orange hoverable pulse"
          onClick={() => handleStart()}
        >
          Start Quiz!
        </NavLink>
      </div>
      <div className="row center">
        <a className="btn orange modal-trigger" href="#modal1">
          Instructions
        </a>
        <div
          ref={(m) => {
            setModal(m);
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>Instructions</h4>
            <p>Here's few instructions on how to proceed.</p>
            <p>Start a quiz.</p>
            <p>Try to answer all questions.</p>
            <p>Good luck with the quiz!</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeQuizView;
