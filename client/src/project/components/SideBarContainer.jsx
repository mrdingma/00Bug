import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SideBarBtnList from './SideBarBtnList.jsx';

// TODO: highlight current button

const SideBarContainer = ({ clickIssueViewHandler, clickProjectHomeHandler, clickDashboardHandler, clickNewIssueViewHandler }) => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  });

  return (
    <>
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="menu material-icons">menu</i></a>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <SideBarBtnList
          clickProjectHomeHandler={clickProjectHomeHandler}
          clickDashboardHandler={clickDashboardHandler}
          clickNewIssueViewHandler={clickNewIssueViewHandler}
          clickIssueViewHandler={clickIssueViewHandler}
        />
      </ul>
    </>
  );
};

export default SideBarContainer;
