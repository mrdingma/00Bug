import React, { useEffect, useState } from 'react';

const SideBarBtnEntry = ({ type, clickIssueViewHandler, clickProjectHomeHandler, clickNewIssueViewHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const onClickHandler = (e) => {
    if (e.target.name === 'home') {
      clickProjectHomeHandler();
    }
    if (e.target.name === 'add') {
      clickNewIssueViewHandler();
    }
    if (e.target.name === 'storage') {
      clickIssueViewHandler();
    }
  };

  let content = (
    <li
      className="tooltipped sidebtn"
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
    >
      <i
        name={type}
        onClick={(e) => onClickHandler(e)}
        className="sideIcon material-icons"
        style={{ color: isHovered ? '#4CAF93' : 'white' }}
      >
        {type}
      </i>
    </li>
  );

  return content;

};

export default SideBarBtnEntry;
