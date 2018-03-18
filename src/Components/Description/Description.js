import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="rp-description">
        <h2 className="rp-description__header">{this.props.header}</h2>
        <p className="rp-description__content">{this.props.content}</p>
      </div>
    );
  }
}

export default Description;
