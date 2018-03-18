import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="rp-description">
        <h1 className="rp-description__header">{this.props.header}</h1>
        <p
          className="rp-description__content"
          dangerouslySetInnerHTML={{ __html: this.props.content}}>
        </p>
      </div>
    );
  }
}

export default Description;
