import React, { useEffect, useState } from "react";
import Status from "../../dashboard/elements/status";
import date from "date-and-time";
import { useAuth0 } from "../../auth0.jsx";

const IssuesListEntry = ({ issue, setSelectedIssue }) => {
  const statusColorMapper = {
    open: "#ED8077",
    in_progress: "#4488C5",
    resolved: "#5EB5A6"
  };

  const typeColorMapper = {
    request: "#EDA62A",
    task: "#B0BE3C",
    bug: "#E87758",
    other: "#3B9DBD"
  };

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
          <Status className="white-text" color={typeColorMapper[issue.type]}>
            {issue.type}
          </Status>
        </td>
        <td>{issue.summary}</td>
        <td>
          {issue.assignee
            ? issue.assignee === user.name
              ? "me"
              : issue.assignee
            : ""}
        </td>
        <td>
          <Status
            className="white-text"
            color={statusColorMapper[issue.status]}
          >
            {issue.status}
          </Status>
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
