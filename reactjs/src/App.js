import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "./Layout/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Header />
        </Route>
      </Switch>
    </Router>
    // <Header/>
  );
}

export default App;
