import React, { useEffect, useState } from 'react';

const ProjectListListEntry = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  let content = (
    <ul className="collapsible">
      <li>
        <div className="collapsible-header">
          <div>
            <i className="material-icons">business</i>
          </div>
          <div>Project1</div>
        </div>
      </li>
      <li>
        <div className="collapsible-header">
          <div>
            <i className="material-icons">business</i>
          </div>
          <div>Project2</div>
        </div>
      </li>
    </ul>
  );

  return content;
};

export default ProjectListListEntry;
