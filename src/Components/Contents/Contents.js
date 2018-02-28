import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contents.css';

class Contents extends Component {
  render() {
    return (
      <div className="rp-contents">
        <ul>
          {this.props.routes.map(route =>
            (
              <li key={btoa(route.title)}>
                {/* Routes */}
                {route.component && <Link to={route.url}>{route.title}</Link>}

                {/* External URL */}
                {!route.component && <a href={route.url} target="_blank">{route.title}</a>}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Contents;
