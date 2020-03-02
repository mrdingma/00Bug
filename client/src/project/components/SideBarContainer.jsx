import React, { Component } from 'react';
import SideBarBtnList from './SideBarBtnList.jsx';
import M from 'materialize-css/dist/js/materialize.min.js';

// TODO: highlight current button

class SideBar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      const el1 = document.querySelectorAll('.sidenav');
      const el2 = document.querySelectorAll('.tooltipped');
      M.Sidenav.init(el1, {});
      M.Tooltip.init(el2, {});
    });
  }

  render() {
    return (
      <>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="menu material-icons">menu</i></a>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <SideBarBtnList />
        </ul>
      </>
    );
  }
}

export default SideBar;
