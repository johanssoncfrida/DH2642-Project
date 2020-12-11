import React from "react";

const QuizView = ({ question, questionNr, handleClick }) => {
  return (
    <div className="quiz container">
      <br />
      <br />
      <h6 className="center white-text">Question {questionNr + 1}</h6>
      <h2 className="header center orange-text">
        {question && question.questionText}
      </h2>
      <h6 className="center white-text">{question.extra && question.extra}</h6>
      <br />
      <br />
      {question &&
        question.answerOptions.map((op) => (
          <div className="row center" key={op.id}>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="btn btn-large no-uppercase"
              onClick={() => handleClick(op.isCorrect)}
            >
              {op.answerText}
            </a>
          </div>
        ))}
    </div>
  );
};

export default QuizView;
