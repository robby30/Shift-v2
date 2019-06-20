const initState = {
  addMenu: null
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MENU_SUCCESS":
      return {
        ...state,
        addMenu: true
      };
    case "ADD_MENU_FAILED":
      return {
        ...state,
        addMenu: false
      };
    case "FORM_RESET":
      return {
        ...state,
        addMenu: null
      };
    default:
      return state;
  }
};

export default menuReducer;
