import React, {useState} from 'react';

const TryingView = ({score, setScore, questions}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{questions[0].questionText}</h1>
            {questions[0].answerOptions.map(op =>
            <div><button onClick ={ (e) => {
                if (op.isCorrect) {
                    setCount(score + 1)}}  
            }>{op.answerText}</button></div>
            )}
            <div>{count}</div>
        </div>
    )
}

export default TryingView