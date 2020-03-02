import React, { useEffect, useState } from 'react';
import ProjectListListEntry from './ProjectListEntry.jsx';

const ProjectList = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  let content = (
    <div className="col s5 offset-s1">
      <ul>
        <li>
          <div onClick={onClickHandler}>
            <i className="material-icons">keyboard_arrow_down</i>
            Projects
          </div>
        </li>
      </ul>
    </div>
  );

  if (!isClicked) {
    content = (
      <div className="col s5 offset-s1">
        <ul>
          <li>
            <div onClick={onClickHandler}>
              <i className="material-icons">keyboard_arrow_up</i>
              Projects
            </div>
            {
              props.projects.map((project) => (
                <ProjectListListEntry
                  project={project}
                  clickProjectHomeHandler={props.clickProjectHomeHandler}
                  clickIssueViewHandler={props.clickIssueViewHandler}
                  clickNewIssueViewHandler={props.clickNewIssueViewHandler}
                />
              ))
            }
          </li>
        </ul>
      </div>
    );
  }

  return content;
};


export default ProjectList;
