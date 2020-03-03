import React, { useEffect, useState } from 'react';

const SideBarBtnEntry = ({ type, clickIssueViewHandler, clickProjectHomeHandler, clickNewIssueViewHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const typeToText = {
    home: 'Home',
    add: 'Add Issue',
    storage: 'Issues',
  };

  const onClickHandler = (e) => {
    if (e.target.name === 'home' || e.target.innerText.toLowerCase().includes('home')) {
      clickProjectHomeHandler();
    }
    if (e.target.name === 'add' || e.target.innerText.toLowerCase().includes('add')) {
      clickNewIssueViewHandler();
    }
    if (e.target.name === 'storage' || e.target.innerText.toLowerCase().includes('storage')) {
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
      <div className="sidebtnTxt" style={{ color: isHovered ? '#4CAF93' : 'white' }}>
        {typeToText[type]}
      </div>
    </li>
  );

  return content;

};

export default SideBarBtnEntry;
