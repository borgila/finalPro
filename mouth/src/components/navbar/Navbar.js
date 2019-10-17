// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      logo: require("../../icons/basketball.png")
      // logo:require("../../../icons/basketball.png")
    };

    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    return (
      <nav className="nav-style">
        <div className="nav-bar">
          {this.state.loggedInUser ? (
            <div>
              <b>{this.state.loggedInUser.username}</b>{" "}
              <span onClick={this.handleLogout}>logout</span>
            </div>
          ) : (
            <div>
              <Link to={`/login`}>Login</Link>
              <Link to={`/signup`}>Signup</Link>
            </div>
          )}
        </div>
        <div className="logo-nav">
          <img src={this.state.logo} />
        </div>
        <div>
          {this.state.loggedInUser ? (
            <Link to={`/myTeam`}>My profile</Link>
          ) : (
            <Link to={`/login`}>My team</Link>
          )}
          <Link to={`/news`}>News</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
