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
          className="btn btn-large orange hoverable buttonPulse"
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
          className="modal "
        >
          <div className="modal-content">
            <h2 className="orange-text">Instructions</h2>

            
              <p>
                Welcome to our movie quiz site! On this site you can test your
                knowledge about the 250 top rated movies according to IMDB. Tell
                your friends and you can all have your individual free account
                and see who gets the highest score! The quiz have 5 questions
                and each question has 3 alternatives. Check the alternative you
                believe is the right answer and continue to the next question.
                Every right answer gives you one point and the total score will
                be ordered by points and the total time it took taking the quiz.
              </p>
              <p>
                When your are done answering all the question press "Get result"
                and you will get your score! If you are amongst the top 5 your
                name will show on the Top 5-board! So what are you waiting
                for? Lets get that score!
              </p>
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
    </div>
  );
};

export default BeforeQuizView;
