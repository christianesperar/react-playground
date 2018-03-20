import React from 'react';
import { Link } from 'react-router-dom';
import './Contents.css';

function Contents(props) {
  return (
    <div className="rp-contents">
      <ul className="rp-contents__list">
        {props.routes.map(route =>
          (
            <li className="rp-contents__item" key={btoa(route.title)}>
              {/* Routes */}
              {route.component &&
                <Link
                  className="rp-contents__link"
                  to={route.url}
                >
                  {route.title}
                </Link>
              }

              {/* External URL */}
              {!route.component &&
                <a
                  className="rp-contents__link"
                  href={route.url}
                  target="_blank"
                >
                  {route.title}
                </a>
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Contents;
