'use strict';

module.exports = {
  postFeed: function (url, cb) {
    $.ajax({
      url: '/api/v1/feeds',
      method: 'POST',
      data: {feed_url: url},
      dataType: 'json',
      cache: false,
      success: function (data) {
        cb(data);
      },
      error: function (xhr, status, err) {
        alert(err)
      }
    });
  },

  getFeeds: function (cb) {
    $.ajax({
      url: '/api/v1/feeds',
      dataType: 'json',
      cache: false,
      success: function (data) {
        cb(data);
      },
      error: function (xhr, status, err) {
        alert(err)
      }
    });
  },

  putFeeds: function(id, cb) {
    $.ajax({
      url: '/api/v1/feeds/' + id,
      method: 'PUT',
      dataType: 'json',
      cache: false,
      success: function (data) {
        cb(data);
      },
      error: function (xhr, status, err) {
        alert(err)
      }
    });
  }
};
