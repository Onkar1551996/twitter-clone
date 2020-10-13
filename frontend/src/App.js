import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Login from "./pages/login";
import Main from "./pages/main";
import Signupform from "./pages/signupform";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Notifications from "./pages/notifications";
import Messages from "./pages/messages";
import Bookmarks from "./pages/bookmarks";
import Lists from "./pages/lists";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signupform} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/bookmarks" component={Bookmarks} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
