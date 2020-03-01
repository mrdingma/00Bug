import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends Component {
  // componentDidMount() {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const elems = document.querySelectorAll('.sidenav');
  //     M.Sidenav.init(elems, {});
  //   });
  // }

  render() {
    const content = (
      <div>
        <nav>
          <div className="nav-wrapper cyan lighten-4">
            <a href="#" className="brand-logo" style={{ left: '5px', top: '-30px' }}>
              <span>
                <img src="logo.png" style={{ height: '15%', width: '15%', top: '5px' }} />
                bugtracker
              </span>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );

    return content;
  }
}

export default Header;
