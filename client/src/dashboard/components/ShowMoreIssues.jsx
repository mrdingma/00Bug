import React, { useState } from "react";

const ShowMoreIssues = ({ setShowMore, showMore }) => (
  <div
    className="col s12 issues-show-arrow"
    style={{ padding: 0, textAlign: "center" }}
    onClick={() => setShowMore(!showMore)}
  >
    <i class="material-icons">
      {showMore ? "arrow_drop_up" : "arrow_drop_down"}
    </i>
  </div>
);

export default ShowMoreIssues;
