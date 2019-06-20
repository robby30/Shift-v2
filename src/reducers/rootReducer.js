import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  project: projectReducer
});

export default rootReducer;
