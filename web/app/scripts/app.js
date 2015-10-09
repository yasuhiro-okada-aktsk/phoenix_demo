import React from 'react'
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link } from 'react-router'

var createBrowserHistory = require('history/lib/createBrowserHistory');

import App from "./components/DemoApp.react.js";
import SignUp from "./components/SignUp.react.js";
import SignIn from "./components/SignIn.react.js";
import SignOut from "./components/SignOut.react.js";
import UserList from "./components/UserList.react.js";
import Dashboard from "./components/Dashboard.react.js";

import FeedIndex from "./components/feed/FeedIndex.react.js";
import FeedAdd from "./components/feed/FeedAdd.react.js";

// history={createBrowserHistory()}
ReactDOM.render((
  <Router >
    <Route path="/" component={App}>
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
