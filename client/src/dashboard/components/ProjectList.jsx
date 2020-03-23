import React, { useEffect, useState } from "react";
import ProjectListListEntry from "./ProjectListEntry.jsx";

const ProjectList = props => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  let content = (
    <ul>
      <li>
        <div onClick={onClickHandler}>
          <i className="material-icons">keyboard_arrow_down</i>
          Projects
        </div>
      </li>
    </ul>
  );

  if (!isClicked) {
    content = (
      <ul>
        <li>
          <div onClick={onClickHandler}>
            <i className="material-icons">keyboard_arrow_up</i>
            Projects
          </div>
          {props.projects.map(project => (
            <ProjectListListEntry
              setSelectedIssue={props.setSelectedIssue}
              setCurrentTab={props.setCurrentTab}
              key={project.id}
              project={project}
              getAllIssuesByProject={props.getAllIssuesByProject}
              clickProjectHomeHandler={props.clickProjectHomeHandler}
              clickIssueViewHandler={props.clickIssueViewHandler}
              clickNewIssueViewHandler={props.clickNewIssueViewHandler}
            />
          ))}
        </li>
      </ul>
    );
  }

  return content;
};

export default ProjectList;
