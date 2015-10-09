'use strict';

var AuthActionCreators = require('../actions/AuthActionCreators');

module.exports = React.createClass({

  componentDidMount() {
    console.log("sign out")
    AuthActionCreators.logOut();
  },

  render() {
    return <p>You are now logged out</p>
  }
});
