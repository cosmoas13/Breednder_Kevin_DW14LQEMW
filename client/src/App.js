import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Landingpet/Landing.js";
import Home from "./Homepet/Home.js";
import Profile from "./Profilepet/Profile.js";
import Edit from "./Editpet/Edit.js";
import Add from "./Addpet/Add.js";
import { connect } from "react-redux";
// import { auth } from "./_reducers/auth";
import { getAuth } from "./_actions/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.autoAuth();
  }
  render() {
    console.log("auth", this.props.authenticated);
    const { authenticated } = this.props;
    return (
      <Router>
        {!authenticated ? (
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Redirect to="/" />
            {""}
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/Add">
              <Add />
            </Route>
            <Route exact path="/Edit">
              <Edit />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Redirect to="/Home" />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoAuth: () => dispatch(getAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
