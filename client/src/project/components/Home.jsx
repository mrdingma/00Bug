import React, { useEffect, useState } from 'react';

import SideBarContainer from './SideBarContainer.jsx';

const Home = (props) => {


  let content = (
    <>
      <SideBarContainer
        clickProjectHomeHandler={props.clickProjectHomeHandler}
        clickDashboardHandler={props.clickDashboardHandler}
        clickNewIssueViewHandler={props.clickNewIssueViewHandler}
        clickIssueViewHandler={props.clickIssueViewHandler}
      />
    </>
  );

  return content;
};

export default Home;
