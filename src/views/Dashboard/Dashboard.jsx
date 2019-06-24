import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const name = this.props.data && this.props.data;
    if (!name) {
      return (
        //loading
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const id = state.firebase.auth.uid;
//   return {
//     name: state.firestore.data.company && state.firestore.data.company[id].name
//   };
// };
export default Dashboard;

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "company" }])
// )(Dashboard);
