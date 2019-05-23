import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  project: projectReducer
});

export default rootReducer;
