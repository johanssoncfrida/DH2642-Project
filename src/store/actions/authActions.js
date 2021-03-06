export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            username: newUser.username,
            favoriteActor: newUser.favoriteActor,
            gender: newUser.gender,
            highscores: [
              {
                highscore: "",
                time: "",
                createdAt: "",
              },
            ],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const updateUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const state = getState();
    const userId = state.firebase.auth.uid;
    var db = firebase.firestore();
    const userScores = state.firestore.ordered.userScores;

    db.collection("users").doc(userId).update({
      username: user.username,
      favoriteActor: user.favoriteActor,
      gender: user.gender
    })
    .then(() => {
      userScores.forEach((obj) => {
        if (obj.userId === userId) {
          const score = db.collection("userScores").doc(obj.id);
          score.update({
            username: user.username,
          });
        }
      });
    })
    .then(() => {
      dispatch({ type: "UPDATE_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_ERROR", err });
    });
  };
}
