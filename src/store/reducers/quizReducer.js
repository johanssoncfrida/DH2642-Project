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
      console.log("save score", action.totalTime);
      return state;
    case "SAVE_SCORE_ERROR":
      console.log("save score error", action.err);
      return state;
    case "NEXT_QUESTION":
      //console.log('next question', action.newNr);
      return {
        ...state,
        currentQuestionNr: action.newNr,
      };
    case "RESET_QUESTION":
      //console.log('reset question', action.newNr);
      return {
        ...state,
        currentQuestionNr: action.newNr,
      };
    case "SAVE_QUESTIONS":
      //console.log('save questions', action.questions);
      return {
        ...state,
        questions: action.questions,
      };
    case "UPDATE_SCORE":
      //console.log('update score', action.newScore);
      return {
        ...state,
        currentScore: action.newScore,
      };
    case "RESET_SCORE":
      //console.log('reset score', action.newScore);
      return {
        ...state,
        currentScore: action.newScore,
      };
    case "START_TIME":
      console.log("start time", action.startTime);
      return {
        ...state,
        startTime: action.startTime,
      };
    case "TOTAL_TIME":
      console.log("total time", action.totalTime);
      return {
        ...state,
        totalTime: action.totalTime,
      };
    default:
      return state;
  }
};

export default quizReducer;
