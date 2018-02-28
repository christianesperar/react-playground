import React, { Component } from 'react';
import Routes from './../Config/Routes.json';
import Contents from './../Components/Contents/Contents';
import Description from './../Components/Description/Description';

class Home extends Component {
  render() {
    return (
      <div>
        <Description description="My personal playground while learning React" />

        <h2>Exercise</h2>
        <Contents routes={Routes.exercises} />

        <h2>Tutorials</h2>
        <Contents routes={Routes.tutorials} />
      </div>
    );
  }
}

export default Home;
