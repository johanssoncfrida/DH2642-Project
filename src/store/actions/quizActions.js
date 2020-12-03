export const saveScore = (score) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('scores').add({
            ...score,
            username: 'TestUser',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_SCORE', score: score});
        }).catch((err) => {
            dispatch({ type: 'ADD_SCORE_ERROR', err });
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
    //const questionNr = 0;
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
    //const score = 0;
    return (dispatch, getState) => {
        dispatch({ type: 'RESET_SCORE', newScore: 0 });
    }
};