import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import projectReducer from "./projectReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  project: projectReducer,
  menu: menuReducer
});

export default rootReducer;
