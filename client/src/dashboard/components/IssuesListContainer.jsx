import React, { useEffect, useState } from "react";
import IssuesListEntry from "./IssuesListEntry.jsx";

const IssuesListContainer = props => {
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
              My Issues
            </div>
            <div
              class="collapsible-body issue-table"
              style={{ border: "1px solid #ddd" }}
            >
              <table className="highlight centered">
                <thead className="grey lighten-4">
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Due</th>
                    <th scope="col">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {props.issues.map(issue => {
                    if (issue.status !== "closed") {
                      return (
                        <IssuesListEntry
                          key={issue.id}
                          issue={issue}
                          setCurrentTab={props.setCurrentTab}
                          setSelectedIssue={props.setSelectedIssue}
                          clickIssueViewHandler={props.clickIssueViewHandler}
                          getAllIssuesByProject={props.getAllIssuesByProject}
                        />
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );

  return content;
};

export default IssuesListContainer;
