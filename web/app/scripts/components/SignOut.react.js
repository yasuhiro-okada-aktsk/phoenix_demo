import React from 'react'

var AuthActionCreators = require('../actions/AuthActionCreators');

export default React.createClass({

  componentDidMount() {
    console.log("sign out");
    AuthActionCreators.logOut();
  },

  render() {
    return <p>You are now logged out</p>
  }
});
