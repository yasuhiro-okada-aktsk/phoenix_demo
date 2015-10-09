'use strict';

var AuthActionCreators = require('../actions/AuthActionCreators');

export default  {
  logIn: function (user) {
    $.ajax({
      url: "/api/v1/login",
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function (data) {
        AuthActionCreators.loggedIn(data.token);
      },
      error: function (xhr, status, err) {
        AuthActionCreators.logInFailed(err);
      }
    });
  },

  logOut: function () {

  }
};
