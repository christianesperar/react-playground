import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="rp">
        <Header title="Welcome to React Playground" />

        <Router>
          <div className="rp-container">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
