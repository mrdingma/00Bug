import React, { useState, useEffect } from 'react';
import Header from './dashboard/components/Header.jsx';
import ProjectList from './dashboard/components/ProjectList.jsx';
import RecentUpdatesContainer from './dashboard/components/RecentUpdatesContainer.jsx';
import IssuesListContainer from './dashboard/components/IssuesListContainer.jsx';
import ProjectHome from './project/components/Home.jsx';

const App = (props) => {
  const [isDashboardView, setIsDashboardView] = useState(true);
  const [isProjectHomeView, setIsProjectHomeView] = useState(false);
  const [isNewIssueView, setIsNewIssueView] = useState(false);

  const clickDashboardHandler = () => {
    setIsDashboardView(true);
    setIsProjectHomeView(false);
    setIsNewIssueView(false);
  };

  const clickProjectHomeHandler = () => {
    setIsDashboardView(false);
    setIsProjectHomeView(true);
    setIsNewIssueView(false);
  };

  const clickNewIssueViewHandler = () => {
    setIsDashboardView(false);
    setIsProjectHomeView(false);
    setIsNewIssueView(true);
  };

  let content = (
    <div className="progress">
      <div className="indeterminate" />
    </div>
  );

  if (isDashboardView) {
    content = (
      <>
        <Header />
        <div className="row">
          <ProjectList />
          <RecentUpdatesContainer />
        </div>
        <div className="row">
          <IssuesListContainer />
        </div>
      </>
    )
  }

  if (isProjectHomeView) {
    content = (
      <>
        <ProjectHome />
      </>
    );
  }


  return content;
};

export default App;
