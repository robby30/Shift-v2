export const addMenuItem = (menu, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("company")
      .doc(id)
      .collection("menu")
      .add(menu)
      .then(() => {
        dispatch({ type: "ADD_MENU_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "ADD_MENU_FAILED" });
      });
  };
};

export const formReset = () => {
  return (dispatch, getState) => {
    dispatch({ type: "FORM_RESET" });
  };
};
