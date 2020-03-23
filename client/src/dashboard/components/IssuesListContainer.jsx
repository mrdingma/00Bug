import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import IssuesListEntry from "./IssuesListEntry.jsx";

const IssuesListContainer = props => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  });

  let content = (
    <ul>
      <li>
        <ul class="collapsible">
          <li className="active">
            <div class="collapsible-header" onClick={onClickHandler}>
              <i class="material-icons">
                {isClicked ? "arrow_drop_down" : "arrow_drop_up"}
              </i>
              My Issues
            </div>
            <div class="collapsible-body">
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
