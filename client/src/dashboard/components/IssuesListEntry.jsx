import React, { useEffect, useState } from "react";
import Status from "../elements/status";
import date from "date-and-time";
import IssueStatusTag from "../../project/components/IssueStatusTag.jsx";

const IssuesListEntry = ({
  issue,
  setSelectedIssue,
  clickIssueViewHandler,
  getAllIssuesByProject,
  setCurrentTab
}) => {
  const priorityMapper = {
    1: "arrow_downward",
    2: "arrow_forward",
    3: "arrow_upward"
  };

  const dateParse = d => {
    return d === null ? "" : date.format(new Date(d), "MMM. D");
  };

  const clickHandler = () => {
    getAllIssuesByProject(issue.project);
    setCurrentTab("issue_list");
    setSelectedIssue(issue);
    clickIssueViewHandler();
  };

  const content = (
    <tr style={{ cursor: "pointer" }} onClick={clickHandler}>
      <td>
        <IssueStatusTag issue={issue} />
      </td>
      <td>
        <i className="material-icons">{priorityMapper[issue.priority]}</i>
      </td>
      <td>{dateParse(issue.due_date)}</td>
      <td>{issue.summary}</td>
    </tr>
  );

  return content;
};

export default IssuesListEntry;
