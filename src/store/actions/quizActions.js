export const saveScore = (score, totalTime) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const state = getState();
        const username = state.firebase.profile.username;

        firestore.collection('userScores').add({
            ...score,
            username: username,
            time: totalTime,
            quizScore: score,
            createdAt: new Date(),
        }).then(() => {
            dispatch({type: 'SAVE_SCORE', score: score});
        }).catch((err) => {
            dispatch({ type: 'SAVE_SCORE_ERROR', err });
        })
    }
};

export const nextQuestion = (questionNr) => {
    questionNr = questionNr + 1;
    return (dispatch, getState) => {
        dispatch({ type: 'NEXT_QUESTION', newNr: questionNr });
    }
};

export const resetQuestion = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_QUESTION', newNr: 0 });
    }
};

export const updateScore = (score) => {
    score = score + 1;
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_SCORE', newScore: score });
    }
};

export const resetScore = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_SCORE', newScore: 0 });
    }
};

export const startTime = (time) => {
    return (dispatch, getState) => {
        dispatch({ type: 'START_TIME', startTime: time });
    }
};

export const totalTime = (time) => {
    return (dispatch, getState) => {
        dispatch({ type: 'TOTAL_TIME', totalTime: time });
    }
};