'use strict';

export default  {
  postFeed: (url, cb) => {
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

  getFeeds: cb => {
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

  putFeeds: (id, cb) => {
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
