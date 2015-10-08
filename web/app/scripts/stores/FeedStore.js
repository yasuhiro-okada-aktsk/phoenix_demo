
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/DemoConstants').ActionTypes;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _feeds = [];

var Store = assign({}, EventEmitter.prototype, {

  add: function (feed) {
    _feeds.push(feed)
  },

  getFeeds: function() {
    return _feeds;
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
    case ActionTypes.FEED_ADD:
      Store.add(action.feed);
      Store.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = Store;
