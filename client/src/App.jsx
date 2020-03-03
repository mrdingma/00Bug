import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './dashboard/components/Header.jsx';
import ProjectList from './dashboard/components/ProjectList.jsx';
import RecentUpdatesContainer from './dashboard/components/RecentUpdatesContainer.jsx';
import IssuesListContainer from './dashboard/components/IssuesListContainer.jsx';
import ProjectHome from './project/components/Home.jsx';
import NewIssueForm from './project/components/NewIssueForm.jsx';
import ProjectHeader from './project/elements/projectHeader';
import ProjectIssuesListContainer from './project/components/ProjectIssuesListContainer.jsx';

import allProjects from './allProjects';
import allIssues from './allissues';
import allIssuesForProject from './allIssuesForProject';

const App = (props) => {
  const [isDashboardView, setIsDashboardView] = useState(true);
  const [isProjectHomeView, setIsProjectHomeView] = useState(false);
  const [isNewIssueView, setIsNewIssueView] = useState(false);
  const [isIssueView, setIsIssueView] = useState(false);
  const [currentProject, setCurrentProject] = useState('');
  // const [issuesByProject, setIssuesByProject] = useState(null);
  const [issuesByProject, setIssuesByProject] = useState([]);

  const clickDashboardHandler = () => {
    setIsDashboardView(true);
    setIsProjectHomeView(false);
    setIsNewIssueView(false);
    setIsIssueView(false);
  };

  const clickIssueViewHandler = () => {
    setIsDashboardView(false);
    setIsProjectHomeView(false);
    setIsNewIssueView(false);
    setIsIssueView(true);
  };

  const clickProjectHomeHandler = () => {
    setIsDashboardView(false);
    setIsProjectHomeView(true);
    setIsNewIssueView(false);
    setIsIssueView(false);
  };

  const clickNewIssueViewHandler = () => {
    setIsDashboardView(false);
    setIsProjectHomeView(false);
    setIsNewIssueView(true);
    setIsIssueView(false);
  };

  const getAllIssuesByProject = (proj) => {
    setCurrentProject(proj.name);
    const id = proj.id;
    const url = '/issues?project=:projectid';
    // axios.get()


    // do an axios request for issues for that project

  }

  // useEffect(() => {
  //   axios.get
  // })

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
          <ProjectList
            projects={allProjects}
            getAllIssuesByProject={getAllIssuesByProject}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickIssueViewHandler={clickIssueViewHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
          />
          <RecentUpdatesContainer />
        </div>
        <div className="row">
          <IssuesListContainer issues={allIssues} />
        </div>
      </>
    );
  }

  if (isProjectHomeView) {
    content = (
      <>
        <ProjectHome
          issuesByProject={allIssuesForProject}
          clickProjectHomeHandler={clickProjectHomeHandler}
          clickDashboardHandler={clickDashboardHandler}
          clickNewIssueViewHandler={clickNewIssueViewHandler}
          clickIssueViewHandler={clickIssueViewHandler}
        />
      </>
    );
  }

  if (isNewIssueView && issuesByProject !== null) {
    content = (
      <>
        <div class="row">
          <ProjectHeader class="col s12 m4 l1">
            <div>{currentProject}</div>
          </ProjectHeader>
          <div class="col s12 m4 l1">
            <ProjectHome
              clickProjectHomeHandler={clickProjectHomeHandler}
              clickDashboardHandler={clickDashboardHandler}
              clickNewIssueViewHandler={clickNewIssueViewHandler}
              clickIssueViewHandler={clickIssueViewHandler}
            />
          </div>
          <div class="col s12 m8 l10" style={{ marginTop: '7%' }}>
            <NewIssueForm />
          </div>
        </div>
      </>
    );
  }


  if (isIssueView && issuesByProject !== null) {
    content = (
      <div class="row">
        <ProjectHeader class="col s12 m4 l1">
          <div>{currentProject}</div>
        </ProjectHeader>
        <div class="col s12 m4 l1">
          <ProjectHome
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickDashboardHandler={clickDashboardHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
            clickIssueViewHandler={clickIssueViewHandler}
          />
        </div>
        <div class="col s12 m8 l11" style={{ marginTop: '7%' }}>
          <ProjectIssuesListContainer issuesByProject={allIssuesForProject} />
        </div>
      </div>
    );
  }

  return content;
};

export default App;
