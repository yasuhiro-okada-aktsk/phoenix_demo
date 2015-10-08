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
  }
};
