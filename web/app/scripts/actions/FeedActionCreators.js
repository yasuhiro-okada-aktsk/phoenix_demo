var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/DemoConstants').ActionTypes;

module.exports = {
  add: function (url) {
    var Api = require('../apis/FeedApi');
    Api.postFeed(url, function (feed) {
      AppDispatcher.dispatch({
        type: ActionTypes.FEED_ADD,
        feed: feed
      });
    });
  }
};
