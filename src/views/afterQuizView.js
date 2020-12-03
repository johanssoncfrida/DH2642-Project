import React from "react";

const AfterQuizView = ({score}) => {   
    return (
        <div className="afterQuiz container">
            <h2 className="header center orange-text">Your score is {score}</h2>
        </div>
    )
}
  
export default AfterQuizView