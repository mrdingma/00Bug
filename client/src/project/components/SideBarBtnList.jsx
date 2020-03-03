import React, { useState, useEffect } from 'react';
import SideBarBtnEntry from './SideBarBtnEntry.jsx';

const SideBarBtnList = ({ clickIssueViewHandler, clickProjectHomeHandler, clickDashboardHandler, clickNewIssueViewHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const buttonTypes = ['home', 'add', 'storage'];

  let content = (
    <>
      <li
        className="sidebtn"
        onMouseEnter={() => hoverHandler(true)}
        onMouseLeave={() => hoverHandler(false)}
        onClick={() => clickDashboardHandler()}
      >
        <i className="sideIcon material-icons" style={{ color: isHovered ? '#4CAF93' : 'white' }}>business</i>
        <div className="sidebtnTxt" style={{ color: isHovered ? '#4CAF93' : 'white' }}>Dashboard</div>
      </li>
      <li><div className="divider" style={{ margin: '0' }} /></li>
      {
        buttonTypes.map((type) => (
          <SideBarBtnEntry
            key={type}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
            clickIssueViewHandler={clickIssueViewHandler}
            type={type}
          />
        ))
      }

    </>
  );
  return content;
};

export default SideBarBtnList;
