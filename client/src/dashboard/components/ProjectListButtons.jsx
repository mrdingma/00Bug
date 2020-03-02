import React, { useEffect, useState } from 'react';


const ProjectListButtons = (props) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const hoverHandler1 = (value) => {
    setIsHovered1(value);
  };

  const hoverHandler2 = (value) => {
    setIsHovered2(value);
  };

  const clickHandler = () => {
    props.getAllIssuesByProject(props.project);
    props.clickIssueViewHandler();
  };

  let content = (
    <div className="col s1" style={{ width: '100%', display: 'flex', fontSize: '11px' }}>
      <div
        style={{ backgroundColor: isHovered1 ? 'rgba(255,255,255,.2)' : '#4CAF93', cursor: 'pointer' }}
        onMouseEnter={() => hoverHandler1(true)}
        onMouseLeave={() => hoverHandler1(false)}
        onClick={clickHandler}
      >
        Add Issue
      </div>
      <div style={{ margin: '0 4px' }}>|</div>
      <div
        style={{ backgroundColor: isHovered2 ? 'rgba(255,255,255,.2)' : '#4CAF93', cursor: 'pointer' }}
        onMouseEnter={() => hoverHandler2(true)}
        onMouseLeave={() => hoverHandler2(false)}
        onClick={clickHandler}
      >
        Issues
      </div>
    </div>
  );

  return content;
};

export default ProjectListButtons;
