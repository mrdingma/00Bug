import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Modal } from 'react-materialize';
import AddProject from './AddProject.jsx';

const Header = (props) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { hover: true });
  });

  const trigger = <li><a>Add Project</a></li>;

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
            <li>
              <a className='dropdown-trigger' data-target='dropdown1'>
                <i className="material-icons black-text">add</i>
              </a>
              <ul id='dropdown1' className='dropdown-content'>
                <Modal header="Add Project" actions={[]} trigger={trigger}>
                  <AddProject />
                </Modal>
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

export default Header;
