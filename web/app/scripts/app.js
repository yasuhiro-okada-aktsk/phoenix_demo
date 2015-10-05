//import React from 'react'
//import { Router, Route, Link } from 'react-router'

var React = window.React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

//var Timer = require("./ui/Timer");
//var mountNode = document.getElementById("content");
var SignUp = require("./ui/sign_up")


var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="header">
                    <ul className="nav nav-pills pull-right">
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="sign_up">Sign up</Link></li>
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
        <Route name="sign_up" handler={SignUp}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("container"));
});

