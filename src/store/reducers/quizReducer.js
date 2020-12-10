const initState = {
  questions: [],
  currentQuestionNr: 0,
  currentScore: 0,
  startTime: 0,
  totalTime: 0,
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_SCORE":
      return state;
    case "SAVE_SCORE_ERROR":
      return state;
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionNr: action.newNr,
      };
    case "RESET_QUESTION":
      return {
        ...state,
        currentQuestionNr: action.newNr,
      };
    case "SAVE_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        currentScore: action.newScore,
      };
    case "RESET_SCORE":
      return {
        ...state,
        currentScore: action.newScore,
      };
    case "START_TIME":
      return {
        ...state,
        startTime: action.startTime,
      };
    case "TOTAL_TIME":
      return {
        ...state,
        totalTime: action.totalTime,
      };
    default:
      return state;
  }
};

export default quizReducer;
