import React, { useEffect, useState } from 'react';

const SideBarBtnEntry = ({ tip, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  let content = (
    <li
      className="tooltipped sidebtn"
      data-position="right"
      data-tooltip={tip}
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
    >
      <i className="sideIcon material-icons" style={{ color: isHovered ? '#4CAF93' : 'white' }}>{type}</i>
    </li>
  );

  return content;

};

export default SideBarBtnEntry;
