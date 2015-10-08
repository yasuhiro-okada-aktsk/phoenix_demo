//import React from 'react'
//import { Router, Route, Link } from 'react-router'

var Router = require('react-router');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link;

var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var NavBrand = Bootstrap.NavBrand;
var CollapsibleNav = Bootstrap.CollapsibleNav;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;

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
        <Navbar toggleNavKey={0}>
          <NavBrand>Phoenix Demo</NavBrand>
          <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
            <Nav navbar>
              <NavItem eventKey={1} href="#">Dashboard</NavItem>
              <NavDropdown eventKey={2} title="Feed" id="collapsible-nav-dropdown">
                <MenuItem eventKey="1" href="#/feed/">Feed</MenuItem>
                <MenuItem eventKey="2" href="#/feed/create">Create</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#/user_list">User list</NavItem>
            </Nav>
            {this.state.loggedIn ? (
              <Nav navbar right>
                <NavItem eventKey={1} href="#/sign_out">Sign out</NavItem>
              </Nav>
            ) : (
              <Nav navbar right>
                <NavItem eventKey={2} href="#/sign_in">Log in</NavItem>
                <NavItem eventKey={3} href="#/sign_up">Sign up</NavItem>
              </Nav>
            )}

          </CollapsibleNav>
        </Navbar>

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
