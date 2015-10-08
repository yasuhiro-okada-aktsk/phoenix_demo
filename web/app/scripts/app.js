var React = window.React = require('react');
var ReactDOM = window.ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./components/DemoApp.react.js");
var SignUp = require("./components/SignUp.react.js");
var SignIn = require("./components/SignIn.react.js");
var SignOut = require("./components/SignOut.react.js");
var UserList = require("./components/UserList.react.js");
var Dashboard = require("./components/Dashboard.react.js");

var FeedIndex = require("./components/feed/FeedIndex.react.js");
var FeedAdd = require("./components/feed/FeedAdd.react.js");

ReactDOM.render((
  <Router>
    <Route path="app" path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="feed" component={FeedIndex}/>
      <Route path="feed/create" component={FeedAdd}/>
      <Route path="sign_up" component={SignUp}/>
      <Route path="sign_out" component={SignOut}/>
      <Route path="sign_in" component={SignIn}/>
      <Route path="user_list" component={UserList}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.getElementById("container"));
