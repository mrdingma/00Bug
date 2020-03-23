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

  let content = (
    <ul>
      <li>
        <div onClick={onClickHandler}>
          {isClicked ? (
            <i className="material-icons">keyboard_arrow_down</i>
          ) : (
            <i className="material-icons">keyboard_arrow_up</i>
          )}
          Recent Updates
        </div>
        {isClicked ? null : (
          <RecentUpdatesList
            currentProject={currentProject}
            updatesList={updatesList}
            currentTab={currentTab}
          />
        )}
      </li>
    </ul>
  );

  return content;
};

export default RecentUpdatesContainer;
