import React, { useEffect, useState } from 'react';

import SideBarContainer from './SideBarContainer.jsx';

const Home = ({ clickIssueViewHandler, clickProjectHomeHandler, clickDashboardHandler, clickNewIssueViewHandler }) => {
  // const [isClicked, setIsClicked] = useState(false);

  // const onClickHandler = () => {
  //   setIsClicked(!isClicked);
  // };



  let content = (
    <>
      <SideBarContainer
        clickProjectHomeHandler={clickProjectHomeHandler}
        clickDashboardHandler={clickDashboardHandler}
        clickNewIssueViewHandler={clickNewIssueViewHandler}
        clickIssueViewHandler={clickIssueViewHandler}
      />
    </>
  );

  return content;
};

export default Home;
