import { NavLink } from "react-router-dom";

const AfterQuizView = ({
  score,
  handleStart,
  totalTime,
  setModal,
  questions,
  message,
}) => {
  return (
    <div className=" container  " id="afterQuiz">
      <div className="row " id="textAfterquiz">
        <h3 id="headerAfterquiz">Quiz Result</h3>
        <h5>{message}</h5>
        <br />
        <div className="row ">
          <table>
            <tbody>
              <tr>
                <td>Your score: {score} of 5 points!</td>
              </tr>
              <tr>
                <td>Your time: {totalTime.toFixed(2)} seconds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <NavLink to="/" className="btn orange btn-small buttonAfterQuiz">
            Home
          </NavLink>

          <NavLink
            to="/quiz"
            className="btn orange btn-small buttonAfterQuiz buttonPulse"
            onClick={() => handleStart()}
          >
            Try again!
          </NavLink>

          <a
            className="btn orange btn-small modal-trigger buttonAfterQuiz"
            href="#correctAnswers"
          >
            Correct Answers
          </a>
        </div>
        <br />
      </div>

      <div
        ref={(m) => {
          setModal(m);
        }}
        id="correctAnswers"
        className="modal "
      >
        <div className="modal-content">
          <h2 className="orange-text">Correct answers</h2>

          <div className="row black-text">
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((quest) => (
                  <tr key={quest.questionText}>
                    <td>{quest.questionText}</td>
                    <td>{quest.questionAnswer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green orange btn-flat white-text"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterQuizView;
