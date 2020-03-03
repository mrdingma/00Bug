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

// dummy data:
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
  const [projectList, setProjectList] = useState([]);
  const [issuesList, setIssuesList] = useState([]);

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

  // PROJECT AXIOS FUNCTIONS
  const getAllProjects = () => {
    const url = '/projects/user/1';

    axios.get(url)
      .then(({ data }) => {
        console.log(data);
        setProjectList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addProject = (name) => {
    const url = '/projects';
    const params = {
      userId: 1,
      name,
    };

    axios.post(url, params)
      .then(({ data }) => {
        console.log(data);
        setProjectList([...projectList, data]);
      })
      .catch((err) => {
        console.log(error);
      });
  };

  // ISSUES AXIOS FUNCTIONS
  const getAllIssues = () => {
    const url = '/issues/user/1';

    axios.get(url)
      .then(({ data }) => {
        console.log(data);
        setIssuesList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllIssuesByProject = (proj) => {
    setCurrentProject(proj.name);
    const userId = 1;
    const url = `/issues/user/${userId}/project/${proj.name}`;

    axios.get(url)
      .then(({ data }) => {
        console.log(data);
        setIssuesByProject(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addIssue = (data) => {
    const url = '/issues';

    axios.post(url, data)
      .then(({ data }) => {
        setIssuesList([...issuesList, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteIssue = (id) => {
    const url = `/issues/${id}`;

    axios.delete(url)
      .then((res) => {
        getAllIssues();
      })
      .catch((err) => {
        console.log(err);
      });
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
          <ProjectList
            projects={allProjects}
            // projects={projectList}
            getAllIssuesByProject={getAllIssuesByProject}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickIssueViewHandler={clickIssueViewHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
          />
          <RecentUpdatesContainer />
        </div>
        <div className="row">
          <IssuesListContainer issues={allIssues} />
          {/* <IssuesListContainer issues={issuesList} /> */}
        </div>
      </>
    );
  }

  if (isProjectHomeView) {
    content = (
      <>
        <ProjectHome
          issuesByProject={allIssuesForProject}
          // issuesByProject={issuesByProject}
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
          {/* <ProjectIssuesListContainer issuesByProject={issuesByProject} /> */}
        </div>
      </div>
    );
  }

  return content;
};

export default App;
