import React from "react";
import Status from "../../dashboard/elements/status";

const IssueTypeTag = ({ issue }) => {
  const typeColorMapper = {
    request: "#EDA62A",
    task: "#B0BE3C",
    bug: "#E87758",
    other: "#3B9DBD"
  };

  let content = (
    <Status className="white-text" color={typeColorMapper[issue.type]}>
      {issue.type}
    </Status>
  );

  return content;
};

export default IssueTypeTag;
