import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZBdDX4hMXSYqQoGDYqiiOVfWs97Si6rg",
  authDomain: "quizinezz.firebaseapp.com",
  databaseURL: "https://quizinezz.firebaseio.com",
  projectId: "quizinezz",
  storageBucket: "quizinezz.appspot.com",
  messagingSenderId: "818418797455",
  appId: "1:818418797455:web:505f99a446c2bc9c7c19fa",
};

// Initialize Firebase

let app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
let db = firebase.firestore(app);

export default firebase;

export function updateHighscoreFirebase(score, userid, totalTime) {
  const user = db.collection("users").doc(userid);

  const dateTime = getTime();

  user
    ? user.update({
        highscores: firebase.firestore.FieldValue.arrayUnion({
          highscore: score,
          time: totalTime,
          createdAt: dateTime,
        }),
      })
    : console.log("user does not exist");

  return db;
}

export function updateUsername(userScores, userid, targetValue) {
  const user = db.collection("users").doc(userid);

  user
    .update({
      username: targetValue,
    })
    .then(() => {
      userScores.forEach((obj) => {
        if (obj.userId === userid) {
          const score = db.collection("userScores").doc(obj.id);
          score.update({
            username: targetValue,
          });
        }
      });
    });
}
export function updateFavoriteActor(userid, targetValue) {
  const user = db.collection("users").doc(userid);
  console.log(user);
  console.log(userid);
  user.update({
    favoriteActor: targetValue,
  });
}
const getTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const time = new Date().toTimeString().substr(0, 8);

  const dateTime = date + " " + time;
  return dateTime;
};
