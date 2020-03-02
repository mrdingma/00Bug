import React, { useState, useEffect } from 'react';
import SideBarBtnEntry from './SideBarBtnEntry.jsx';

const SideBarBtnList = ({ type, tip }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const buttonTypes = [
    { type: 'home', tip: 'Home' },
    { type: 'add', tip: 'Add Issue' },
    { type: 'storage', tip: 'Issues' },
  ];

  let content = (
    <>
      <li
        className="tooltipped sidebtn"
        data-position="right"
        data-tooltip="Dashboard"
        onMouseEnter={() => hoverHandler(true)}
        onMouseLeave={() => hoverHandler(false)}
      >
        <i className="sideIcon material-icons" style={{ color: isHovered ? '#4CAF93' : 'white' }}>business</i>
      </li>
      <li><div className="divider" style={{ margin: '0' }} /></li>
      {
        buttonTypes.map((ele) => <SideBarBtnEntry type={ele.type} tip={ele.tip} />)
      }

    </>
  );
  return content;
};

export default SideBarBtnList;
