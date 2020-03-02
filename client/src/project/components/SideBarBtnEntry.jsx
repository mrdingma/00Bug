import React, { useEffect, useState } from 'react';

const SideBarBtnEntry = ({ type, clickIssueViewHandler, clickProjectHomeHandler, clickNewIssueViewHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const onClickHandler = (e) => {
    if (e.target.name === 'home' || e.target.innerText === 'home') {
      clickProjectHomeHandler();
    }
    if (e.target.name === 'add' || e.target.innerText === 'add') {
      clickNewIssueViewHandler();
    }
    if (e.target.name === 'storage' || e.target.innerText === 'storage') {
      clickIssueViewHandler();
    }
  };

  let content = (
    <li
      className="tooltipped sidebtn"
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      name={type}
      onClick={(e) => onClickHandler(e)}
    >
      <i
        name={type}
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
