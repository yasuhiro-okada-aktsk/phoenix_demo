'use strict';

var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    LOG_OUT: null,

    FEED_ADD: null,

    SHOW_ERROR: null
    })
};
