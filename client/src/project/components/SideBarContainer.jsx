import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SideBarBtnList from './SideBarBtnList.jsx';

// TODO: highlight current button

const SideBarContainer = (props) => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  });

  return (
    <>
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="menu material-icons">menu</i></a>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <SideBarBtnList
          currentTab={props.currentTab}
          setCurrentTab={props.setCurrentTab}
          clickProjectHomeHandler={props.clickProjectHomeHandler}
          clickDashboardHandler={props.clickDashboardHandler}
          clickNewIssueViewHandler={props.clickNewIssueViewHandler}
          clickIssueViewHandler={props.clickIssueViewHandler}
        />
      </ul>
    </>
  );
};

export default SideBarContainer;
