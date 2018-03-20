import React from 'react';
import './Description.css';

function Description(props) {
  return (
    <div className="rp-description">
      <h1 className="rp-description__header">{props.header}</h1>
      <p
        className="rp-description__content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
}

export default Description;
