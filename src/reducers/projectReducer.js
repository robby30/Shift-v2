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

export default projectReducer;