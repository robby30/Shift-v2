import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbConfig from "./config/fbConfig";

function configureStore(state = {}) {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(
        fbConfig,
        {
          userProfile: "company",
          useFirestoreForProfile: true,
          attachAuthIsReady: true
        } /*, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true} */
      ),
      reduxFirestore(fbConfig)
    )
  );
}

export default configureStore;
