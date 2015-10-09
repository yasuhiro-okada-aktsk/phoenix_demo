import React from 'react'

var Router = require('react-router');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthStore = require('../stores/AuthStore');

export default React.createClass({
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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Phoenix Demo</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="#">Dashboard</Link></li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Feed <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/feed">List</Link></li>
                    <li><Link to="/feed/create">Add</Link></li>
                  </ul>
                </li>

                <li><Link to="/user_list">User list</Link></li>
              </ul>

              {this.state.loggedIn ? (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/sign_out">Sign out</Link></li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/sign_in">Log in</Link></li>
                  <li><Link to="/sign_up">Sign up</Link></li>
                </ul>
              )}
            </div>
          </div>
        </nav>

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
