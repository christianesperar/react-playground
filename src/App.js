import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Config/Routes.json';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import './App.css';

class App extends Component {
  getPages(config) {
    this.pages = {};

    for (let i = config.length - 1; i >= 0; i -= 1) {
      this.pages[config[i].component] = require(`${config[i].path}`).default;
    }
  }

  render() {
    this.getPages(Routes.exercises);

    return (
      <Router>
        <div className="rp">
          <Header
            title="<strong>React</strong> Playground"
            description="My personal playground while learning <strong>React</strong>"
          />

          <div className="rp-container">
            <Route exact path="/" component={Home} />
            {Routes.exercises.map(route =>
              (
                <Route
                  key={btoa(route.title)}
                  path={route.url}
                  component={this.pages[route.component]}
                />
              ))
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
