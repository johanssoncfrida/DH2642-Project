export const saveScore = (totalTime) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const dateTime = getTime();
    const state = getState();
    const username = state.firebase.profile.username;
    const userId = state.firebase.auth.uid;
    const score = state.quiz.currentScore;
    const user = firestore.collection("users").doc(userId);

    firestore
      .collection("userScores")
      .add({
        ...totalTime,
        username: username,
        time: totalTime,
        quizScore: state.quiz.currentScore,
        createdAt: new Date(),
        userId: userId,
      })
      .then(() => {
        user.update({
          highscores: firestore.FieldValue.arrayUnion({
            highscore: score,
            time: totalTime,
            createdAt: dateTime,
          }),
        })
      })
      .then(() => {
        dispatch({ type: "SAVE_SCORE", totalTime: totalTime });
      })
      .catch((err) => {
        dispatch({ type: "SAVE_SCORE_ERROR", err });
      });
  };
};

export const nextQuestion = (questionNr) => {
  questionNr = questionNr + 1;
  return (dispatch, getState) => {
    dispatch({ type: "NEXT_QUESTION", newNr: questionNr });
  };
};

export const resetQuestion = () => {
  return (dispatch, getState) => {
    dispatch({ type: "RESET_QUESTION", newNr: 0 });
  };
};

export const saveQuestions = (questions) => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_QUESTIONS", questions: questions });
  };
};

export const updateScore = (score) => {
  score = score + 1;
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_SCORE", newScore: score });
  };
};

export const resetScore = () => {
  return (dispatch, getState) => {
    dispatch({ type: "RESET_SCORE", newScore: 0 });
  };
};

export const startTime = (time) => {
  return (dispatch, getState) => {
    dispatch({ type: "START_TIME", startTime: time });
  };
};

export const totalTime = (time) => {
  return (dispatch, getState) => {
    dispatch({ type: "TOTAL_TIME", totalTime: time });
  };
};

const getTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const time = new Date().toTimeString().substr(0, 8);

  const dateTime = date + " " + time;
  return dateTime;
};
