import React from "react";
import Status from "../../dashboard/elements/status";

const StatusBar = ({ issuesByProject }) => {
  const calc = () => {
    const totalCount = issuesByProject.length;
    const hash = {};

    issuesByProject.forEach(
      issue => (hash[issue.status] = (hash[issue.status] || 0) + 1)
    );

    Object.keys(hash).forEach(
      status =>
        (hash[status] = {
          count: hash[status],
          percent: ((hash[status] / totalCount) * 100).toFixed(0)
        })
    );

    return hash;
  };

  const content = (
    <>
      <div className="col s12 status-title" style={{ marginBottom: "0.5em" }}>
        Status
      </div>
      <div
        className="col s12"
        style={{ padding: 0, display: "flex", marginBottom: "0.5em" }}
      >
        <div
          className="progress-bar-open"
          style={{
            width: `${calc().open ? calc().open.percent : 0}%`,
            height: "0.5em"
          }}
        ></div>
        <div
          className="progress-bar-in-progress"
          style={{
            width: `${calc().in_progress ? calc().in_progress.percent : 0}%`
          }}
        ></div>
        <div
          className="progress-bar-resolved"
          style={{
            width: `${calc().resolved ? calc().resolved.percent : 0}%`
          }}
        ></div>
        <div
          className="progress-bar-closed"
          style={{ width: `${calc().closed ? calc().closed.percent : 0}%` }}
        ></div>
      </div>
      <div
        className="col s12"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          Open
          <br />
          <Status className="white-text" color="#ed8077">
            {calc().open ? calc().open.count : 0}
          </Status>
        </div>
        <div>
          In Progress
          <br />
          <Status className="white-text" color="#4488c5">
            {calc().in_progress ? calc().in_progress.count : 0}
          </Status>
        </div>
        <div>
          Resolved
          <br />
          <Status className="white-text" color="#5eb5a6">
            {calc().resolved ? calc().resolved.count : 0}
          </Status>
        </div>
        <div>
          Closed
          <br />
          <Status className="white-text" color="#d0d88a">
            {calc().closed ? calc().closed.count : 0}
          </Status>
        </div>
      </div>
    </>
  );

  return content;
};

export default StatusBar;
