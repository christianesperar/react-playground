import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contents extends Component {
  render() {
    return (
      <ul>
        {this.props.routes.map(route =>
          (
            <li key={btoa(route.title)}>
              {/* Routes */}
              {route.path && <Link to={route.path}>{route.title}</Link>}

              {/* External URL */}
              {route.url && <a href={route.url} target="_blank">{route.title}</a>}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Contents;
