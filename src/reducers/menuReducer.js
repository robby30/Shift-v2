const initState = {
  addMenu: null,
  deleteMenu: null,
  updateMenu: null
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
    case "DELETE_MENU_SUCCESS":
      return {
        ...state,
        deleteMenu: true
      };
    case "DELETE_MENU_FAILED":
      return {
        ...state,
        deleteMenu: false
      };
    case "UPDATE_MENU_SUCCESS":
      return {
        ...state,
        updateMenu: true
      };
    case "FORM_RESET":
      return {
        ...state,
        addMenu: null,
        updateMenu: null
      };
    default:
      return state;
  }
};

export default menuReducer;
