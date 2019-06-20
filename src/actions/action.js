export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        console.log(resp.user.uid);
        return firestore
          .collection("company")
          .doc(resp.user.uid)
          .set({
            name: newUser.name
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_FAILED", err });
      });
  };
};

export const signIn = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_FAILED" });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .logout()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "LOGOUT_FAIL" });
      });
  };
};
