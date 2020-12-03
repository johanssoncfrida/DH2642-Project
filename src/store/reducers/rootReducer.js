import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import quizReducer from "./quizReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  quiz: quizReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
