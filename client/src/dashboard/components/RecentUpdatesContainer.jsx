import React, { useEffect, useState } from "react";
import RecentUpdatesList from "./RecentUpdatesList.jsx";

const RecentUpdatesContainer = ({
  currentTab,
  currentProject,
  updatesList
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const content = (
    <ul>
      <li>
        <ul class="collapsible" style={{ boxShadow: "none", border: "none" }}>
          <li className="active">
            <div
              class="collapsible-header"
              onClick={onClickHandler}
              style={{ border: "none" }}
            >
              <i class="material-icons">
                {isClicked ? "arrow_drop_down" : "arrow_drop_up"}
              </i>
              Recent Updates
            </div>
            <div class="collapsible-body" style={{ border: "none" }}>
              <RecentUpdatesList
                currentProject={currentProject}
                updatesList={updatesList}
                currentTab={currentTab}
              />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );

  return content;
};

export default RecentUpdatesContainer;
