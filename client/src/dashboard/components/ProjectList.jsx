import React, { useEffect, useState } from "react";
import ProjectListEntry from "./ProjectListEntry.jsx";

const ProjectList = props => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const content = (
    <ul>
      <li>
        <ul class="collapsible" style={{ boxShadow: "none", border: "none" }}>
          <li className="active">
            <div
              class="collapsible-header"
              onClick={onClickHandler}
              style={{ border: "none" }}
            >
              <i class="material-icons">
                {isClicked ? "arrow_drop_down" : "arrow_drop_up"}
              </i>
              Projects
            </div>
            <div class="collapsible-body" style={{ border: "none" }}>
              {props.projects.map(project => (
                <ProjectListEntry
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
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );

  return content;
};

export default ProjectList;
