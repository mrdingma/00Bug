import React, { useEffect, useState } from 'react';
import Row from '../elements/row';
import ProjectListButtons from './ProjectListButtons.jsx';


const ProjectListEntry = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  let content = (
    <ul className="collapsible">
      <li>
        <div
          className="collapsible-header"
          style={{ backgroundColor: isHovered ? '#4CAF93' : 'white', padding: '0.5rem', cursor: 'auto' }}
          onMouseEnter={() => hoverHandler(true)}
          onMouseLeave={() => hoverHandler(false)}
        >
          <div style={{ alignSelf: 'center' }}>
            <i className={isHovered ? 'material-icons white-text' : 'material-icons'}>
              business
            </i>
          </div>
          <Row className={isHovered ? 'row white-text' : 'row black-text'}>
            <div className="col s1" style={{ cursor: 'pointer' }} onClick={() => props.clickProjectHomeHandler()}>Project1</div>
            {
              isHovered
                ? <ProjectListButtons />
                : null
            }
          </Row>
        </div>
      </li>
    </ul>
  );

  return content;
};

export default ProjectListEntry;
