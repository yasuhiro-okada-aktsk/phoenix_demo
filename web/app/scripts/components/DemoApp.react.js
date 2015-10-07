//import React from 'react'
//import { Router, Route, Link } from 'react-router'

var Router = require('react-router');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link;

var AuthStore = require('../stores/AuthStore');

module.exports = React.createClass({
  getInitialState() {
    return {
      loggedIn: AuthStore.isLoggedIn()
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
      <div>
        <div className="header">
          <ul className="nav nav-pills pull-right">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="user_list">User List</Link></li>
            {this.state.loggedIn ? (
              <li><Link to="sign_out">Sign out</Link></li>
            ) : (
              <li><Link to="sign_in">Sign in</Link></li>
            )}
            {this.state.loggedIn ? (
              <div></div>
            ) : (
              <li><Link to="sign_up">Sign up</Link></li>
            )}
          </ul>
          <h3 className="text-muted">phoenix_demo_web</h3>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },

  _onChange: function () {
    this.setState(this.getInitialState());
  }
});
