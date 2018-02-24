import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="rp">
        <Header title="Welcome to React Playground" />
        <p className="rp-intro">
          My personal playground while learning React
        </p>
      </div>
    );
  }
}

export default App;
