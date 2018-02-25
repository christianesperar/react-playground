import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <p className="rp-description">{this.props.description}</p>
    );
  }
}

export default Description;
