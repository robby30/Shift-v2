export const signUp = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        // return firestore
        //   .collection("users")
        //   .doc(resp.user.uid)
        //   .set({
        //     firstName: newUser.firstName,
        //     lastName: newUser.lastName,
        //     initials: newUser.firstName[0] + newUser.lastName[0]
        //   });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
