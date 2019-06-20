import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    firestore: state.firestore
  };
};

export default compose(connect(mapStateToProps))(Dashboard);
