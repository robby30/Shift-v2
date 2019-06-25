const initState = {
  authError: null
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        authError: action.err
      }
    default:
      return state;
  }
};

export default projectReducer;
