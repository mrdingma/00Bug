import React, { useEffect, useState } from "react";
import IssuesListEntry from "./IssuesListEntry.jsx";

const IssuesListContainer = props => {
  const onClickHandler = () => {
    props.setIsIssuesExpanded(!props.isIssuesExpanded);
  };

  let issuesArray = props.issues;

  if (props.issues.length > 10 && !props.showMore) {
    issuesArray = props.issues.slice(0, 10);
  }

  const content = (
    <ul style={{ marginBottom: 0 }}>
      <li>
        <ul
          class="collapsible"
          style={{ boxShadow: "none", border: "none", marginBottom: "2px" }}
        >
          <li className="active">
            <div
              class="collapsible-header"
              onClick={onClickHandler}
              style={{ border: "none" }}
            >
              <i class="material-icons">
                {props.isIssuesExpanded ? "arrow_drop_down" : "arrow_drop_up"}
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
                  {issuesArray.map(issue => {
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
