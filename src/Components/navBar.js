import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class navBar extends Component {
  render() {
    return(
      <div className="navBar">
        <div className="navBar-header">
          <img src={logo} className="navBar-logo" alt="logo" />
            <h2>This ish workin</h2>
        </div>
        <p className="navBar-intro">
          <h3>You shall modificationalizeify maybe if you want to.</h3>
        </p>
      </div>
    );
  }
}

export default navBar;
