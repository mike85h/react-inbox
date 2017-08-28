import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MAKE A REACT APP NOW DUDER!</h2>
        </div>
        <p className="App-intro">
          You shall modificationalizeify <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
