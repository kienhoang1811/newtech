import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./Layout/Login/Login";
import Forgot from "./Layout/Forgot/Forgot";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Add_admin from "./Layout/Add_admin/Add_admin"
import Add_user from "./Layout/Add_user/Add_user";
import Edit_user from "./Layout/Edit_user/Edit_user";


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <Forgot />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/add-admin">
          <Add_admin/>
        </Route>
        <Route path="/add-user">
          <Add_user/>
        </Route>
        <Route path="/edit-user">
          <Edit_user />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
