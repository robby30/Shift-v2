export const addMenuItem = (menu, id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    var uploadTask = firebase
      .storage()
      .ref()
      .child(`profile/${menu.name}/${new Date().getTime()}`)
      .put(menu.file);

    uploadTask.on(
      "state_changed",
      function(snapshot) {},
      function(error) {},
      function() {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(downloadURL => {
            menu.file = downloadURL;
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
          })
          .catch(err => {
            console.log(err);
          });
      }
    );
  };
};

export const updateMenuItem = (menu, id, menuId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("company")
      .doc(id)
      .collection("menu")
      .doc(menuId)
      .set(menu)
      .then(() => {
        dispatch({ type: "UPDATE_MENU_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "UPDATE_MENU_FAILED" });
      });
  };
};

export const updateCompanyDetails = (companyDetail, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("company")
      .doc(id)
      .set(companyDetail)
      .then(() => {
        dispatch({ type: "UPDATE_MENU_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "UPDATE_MENU_FAILED" });
      });
  };
};

export const deleteMenuItem = (id, menuId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    // firestore
    //   .collection("company")
    //   .doc(id)
    //   .collection("menu")
    //   .doc(menuId)
    //   .delete()
    //   .then(() => {
    //     console.log("in");
    //     dispatch({ type: "DELETE_MENU_SUCCESS" });
    //   })
    //   .catch(() => {
    //     dispatch({ type: "DELETE_MENU_FAILED" });
    //   });
    firestore.delete({ collection: 'company', doc: id, subcollections: [{ collection: "menu", doc: menuId }]})
      .then(() => {
        console.log("in");
        dispatch({ type: "DELETE_MENU_SUCCESS" });
      })
      .catch(e => {
        console.log(e);
        dispatch({ type: "DELETE_MENU_FAILED" });
      });
    }
};

export const formReset = () => {
  return (dispatch, getState) => {
    dispatch({ type: "FORM_RESET" });
  };
};
