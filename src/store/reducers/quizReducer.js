const initState = {
    questions: [
        {
            questionText: "What year is it today?",
            answerOptions: [
                { answerText: '2020', isCorrect: true },
                { answerText: '2019', isCorrect: false },
                { answerText: '2000', isCorrect: false },
            ]
        },
        {
            questionText: "What is 1+1?",
            answerOptions: [
                { answerText: '3', isCorrect: false },
                { answerText: '2', isCorrect: true },
                { answerText: '4', isCorrect: false },
            ]
        },
        {
            questionText: "Question?",
            answerOptions: [
                { answerText: 'False', isCorrect: false },
                { answerText: 'True', isCorrect: true },
                { answerText: 'Falsy', isCorrect: false },
            ]
        }
    ],
    currentQuestionNr: 0,
    currentScore: 0,
}

const quizReducer = (state = initState, action) => {
    switch (action.type) {
        /*case 'SAVE_SCORE':
            console.log('save score', action.score)
            return state;
        case 'SAVE_SCORE_ERROR':
            console.log('save score error', action.err);
            return state;*/
        case 'NEXT_QUESTION':
            console.log('next question', action.newNr);
            return {
                ...state,
                currentQuestionNr: action.newNr  
            };
        case 'RESET_QUESTION':
            console.log('reset question', action.newNr);
            return {
                ...state,
                currentQuestionNr: action.newNr  
            };
        case 'UPDATE_SCORE':
            console.log('update score', action.newScore);
            return {
                ...state,
                currentScore: action.newScore
            };
        case 'RESET_SCORE':
            console.log('reset score', action.newScore);
            return {
                ...state,
                currentScore: action.newScore
            };
        default:
            return state;
    }
}

export default quizReducer;