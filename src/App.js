import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="rp">
        <Header title="Welcome to React Playground" />
        <Description description="My personal playground while learning React" />
      </div>
    );
  }
}

export default App;
