var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/DemoConstants').ActionTypes;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var Store = assign({}, EventEmitter.prototype, {

  isLoggedIn: function () {
    return !!localStorage.token;
  },

  logIn: function(token) {
    localStorage.token = token;
  },

  logOut: function() {
    localStorage.token = "";
  },

  getToken: function() {
    return localStorage.token;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      var token = action.token.trim();
      if (token !== '') {
        Store.logIn(token);
        Store.emitChange();
      }
      break;

    case ActionTypes.LOG_OUT:
      Store.logOut();
      Store.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = Store;
