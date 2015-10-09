import React from 'react'

var AuthActionCreators = require('../actions/AuthActionCreators');
var AuthStore = require('../stores/AuthStore');

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  componentDidMount: function () {
    AuthStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    AuthStore.removeChangeListener(this._onChange);
  },
  render: function () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="text" placeholder="Your email" className="form-control" ref="email"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Your password" className="form-control" ref="password"/>
        </div>

        <div className="form-group">
          <input type="submit" value="Log in" className="btn btn-primary"/>
        </div>
      </form>
    );
  },
  _onSubmit: function (e) {
    e.preventDefault();
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();
    if (!email || !password) {
      alert('empty!');
      return;
    }

    AuthActionCreators.logIn({user: {email: email, password: password}})
  },

  _onChange: function () {
    $(location).attr('href', "#");
  }
});
