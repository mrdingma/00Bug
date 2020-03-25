import React, { useEffect, useState } from "react";
import date from "date-and-time";
import { useAuth0 } from "../../auth0.jsx";
import IssueTypeTag from "./IssueTypeTag.jsx";
import IssueStatusTag from "./IssueStatusTag.jsx";

const IssuesListEntry = ({ issue, setSelectedIssue }) => {
  const priorityIconMapper = {
    1: "arrow_downward",
    2: "arrow_forward",
    3: "arrow_upward"
  };

  const dateConverter = d => {
    return date.format(new Date(d), "MMM. D, YYYY");
  };

  const { user } = useAuth0();

  const content = (
    <>
      <tr style={{ cursor: "pointer" }} onClick={() => setSelectedIssue(issue)}>
        <td>
          <IssueTypeTag issue={issue} />
        </td>
        <td>{issue.summary}</td>
        <td>
          {issue.assignee === user.name
            ? "me"
            : issue.assignee.map(email => <div>{email}</div>)}
        </td>
        <td>
          <IssueStatusTag issue={issue} />
        </td>
        <td>
          <i className="material-icons">{priorityIconMapper[issue.priority]}</i>
        </td>
        <td>{dateConverter(issue.created_date)}</td>
        <td>{issue.due_date === null ? "" : dateConverter(issue.due_date)}</td>
        <td></td>
        <td>{issue.assigner === user.name ? "myself" : issue.assigner}</td>
        <td>
          {issue.attachment === "" ? (
            ""
          ) : (
            <a href={issue.attachment} target="_blank">
              <i className="material-icons">attach_file</i>
            </a>
          )}
        </td>
      </tr>
    </>
  );

  return content;
};

export default IssuesListEntry;
