import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Header = (props) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { hover: true });
  });

  const content = (
    <div>
      <nav>
        <div className="nav-wrapper grey lighten-4">
          <a href="#" className="brand-logo" style={{ left: '5px', top: '-30px' }}>
            <span className="black-text">
              <img src="logo.png" style={{ height: '15%', width: '15%', top: '5px' }} />
              bugtracker
              </span>
          </a>
          <ul id="nav-mobile" style={{ "paddingRight": '20px' }} className="right hide-on-med-and-down">
            {/* <li className="black-text" style={{ "paddingRight": '20px' }}>Dashboard</li> */}
            <li>
              <a className='dropdown-trigger' data-target='dropdown1'>
                <i className="material-icons black-text">add</i>
              </a>
              <ul id='dropdown1' className='dropdown-content'>
                <li><a>Add Project</a></li>
                <li><a>Add Issue</a></li>
                <li><a>Add User</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  return content;
}
// componentDidMount() {
//   document.addEventListener('DOMContentLoaded', () => {
//     const elems = document.querySelectorAll('.dropdown-trigger');
//     const instances = M.Dropdown.init(elems, { hover: true });
//   });
// }

export default Header;
