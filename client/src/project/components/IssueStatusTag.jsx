import React from "react";
import Status from "../../dashboard/elements/status";

const IssueStatusTag = ({ issue }) => {
  const statusColorMapper = {
    open: "#ED8077",
    in_progress: "#4488C5",
    resolved: "#5EB5A6"
  };

  const map = {
    open: "Open",
    in_progress: "In Progress",
    resolved: "Resolved",
    closed: "closed"
  };

  let content = (
    <Status className="white-text" color={statusColorMapper[issue.status]}>
      {map[issue.status]}
    </Status>
  );

  return content;
};

export default IssueStatusTag;
