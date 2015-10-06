//import React from 'react'
//import { Router, Route, Link } from 'react-router'

var React = window.React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

//var Timer = require("./ui/Timer");
var SignUp = require("./ui/sign_up")
var SignIn = require("./ui/sign_in")
var SignOut = require("./ui/sign_out")
var UserList = require("./ui/user_list")

var Auth = window.Auth = require("./auth")

var App = React.createClass({
    getInitialState() {
        return {
            loggedIn: Auth.loggedIn()
        }
    },
    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        });
        console.log(loggedIn)
    },
    componentWillMount() {
        Auth.onChange = this.updateAuth
        Auth.login()
    },
    render: function () {
        return (
            <div>
                <div className="header">
                    <ul className="nav nav-pills pull-right">
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="user_list">User List</Link></li>
                        {this.state.loggedIn ? (
                            <li><Link to="sign_out">Sign out</Link></li>
                        ) : (
                            <li><Link to="sign_in">Sign in</Link></li>
                        )}
                        {this.state.loggedIn ? (
                            <div></div>
                        ):(
                            <li><Link to="sign_up">Sign up</Link></li>
                        )}
                    </ul>
                    <h3 className="text-muted">phoenix_demo_web</h3>
                </div>
                <div className="jumbotron" id="app">
                    <h1>Phoenix Demo</h1>
                </div>
                <div>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="sign_up" handler={SignUp} />
        <Route name="sign_out" handler={SignOut} />
        <Route name="sign_in" handler={SignIn}/>
        <Route name="user_list" handler={UserList}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("container"));
});

