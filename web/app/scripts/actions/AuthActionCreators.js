'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/DemoConstants').ActionTypes;

module.exports = {
  logIn: function (user) {
    var Api = require('../apis/AuthApi');
    Api.logIn(user);
  },

  loggedIn: function (token) {
    console.log("loggedIn");
    AppDispatcher.dispatch({
      type: ActionTypes.LOG_IN,
      token: token
    });
  },

  logInFailed: function (msg) {
    //AppDispatcher.dispatch({
    //  type: ActionTypes.SHOW_ERROR
    //});
    alert(msg)
  },

  logOut: function () {
    AppDispatcher.dispatch({
      type: ActionTypes.LOG_OUT
    });
  }
};
