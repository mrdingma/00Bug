import React, { useEffect, useState } from 'react';
import Row from '../elements/row';
import ProjectListButtons from './ProjectListButtons.jsx';


const ProjectListEntry = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = (value) => {
    setIsHovered(value);
  };

  const clickHandler = () => {
    props.getAllIssuesByProject(props.project);
    props.clickProjectHomeHandler();
  };

  let content = (
    <ul className="collapsible" style={{ marginBottom: '.5rem' }}>
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
            <div className="col s1" style={{ cursor: 'pointer' }} onClick={clickHandler}>{props.project.name}</div>
            {
              isHovered
                ? (
                  <ProjectListButtons
                    project={props.project}
                    getAllIssuesByProject={props.getAllIssuesByProject}
                    clickIssueViewHandler={props.clickIssueViewHandler}
                    clickNewIssueViewHandler={props.clickNewIssueViewHandler}
                  />
                )
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
