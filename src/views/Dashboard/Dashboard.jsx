import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const id = state.firebase.auth.uid;
  return {
    name: state.firestore.data.company && state.firestore.data.company[id].name
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "company" }])
)(Dashboard);
