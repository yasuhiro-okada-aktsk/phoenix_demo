'use strict';

var AuthStore = require('../stores/AuthStore');

module.exports = {
  getUsers: function (cb) {
    $.ajax({
      url: '/api/v1/users',
      dataType: 'json',
      headers: {"authorization": AuthStore.getToken()},
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
