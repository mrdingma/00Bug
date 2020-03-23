import React, { useEffect, useState } from "react";
import IssuesList from "./IssuesList.jsx";

const IssuesListContainer = props => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  let content = (
    <ul>
      <li>
        <div onClick={onClickHandler}>
          <i className="material-icons">keyboard_arrow_up</i>
          My Issues
        </div>
        <IssuesList
          issues={props.issues}
          setCurrentTab={props.setCurrentTab}
          setSelectedIssue={props.setSelectedIssue}
          clickIssueViewHandler={props.clickIssueViewHandler}
          getAllIssuesByProject={props.getAllIssuesByProject}
        />
      </li>
    </ul>
  );

  if (isClicked) {
    content = (
      <ul>
        <li>
          <div onClick={onClickHandler}>
            <i className="material-icons">keyboard_arrow_down</i>
            My Issues
          </div>
        </li>
      </ul>
    );
  }

  return content;
};

export default IssuesListContainer;
