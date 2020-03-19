import React, { useEffect, useState } from "react";
import Status from "../../dashboard/elements/status";
import date from "date-and-time";

const IssuesListEntry = ({ issue }) => {
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

  const content = (
    <>
      <tr>
        <td>
          <Status className="white-text" color={typeColorMapper[issue.type]}>
            {issue.type}
          </Status>
        </td>
        <td>{issue.summary}</td>
        <td>{issue.assignee.name ? issue.assignee.name : ""}</td>
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
        <td>{issue.assigner.name}</td>
        <td>
          {issue.attachments[0] === "" ? (
            ""
          ) : (
            <i className="material-icons">attach_file</i>
          )}
        </td>
      </tr>
    </>
  );

  return content;
};

export default IssuesListEntry;
