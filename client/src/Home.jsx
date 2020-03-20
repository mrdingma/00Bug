import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./dashboard/components/Header.jsx";
import ProjectList from "./dashboard/components/ProjectList.jsx";
import RecentUpdatesContainer from "./dashboard/components/RecentUpdatesContainer.jsx";
import IssuesListContainer from "./dashboard/components/IssuesListContainer.jsx";
import ProjectHome from "./project/components/ProjectHome.jsx";
import NewIssueForm from "./project/components/NewIssueForm.jsx";
import ProjectHeader from "./project/elements/projectHeader";
import ProjectIssuesListContainer from "./project/components/ProjectIssuesListContainer.jsx";
import StatusBar from "./project/components/StatusBar.jsx";

import { useAuth0 } from "./auth0.jsx";

const Home = props => {
  const [isDashboardView, setIsDashboardView] = useState(true);
  const [isProjectHomeView, setIsProjectHomeView] = useState(false);
  const [isNewIssueView, setIsNewIssueView] = useState(false);
  const [isIssueView, setIsIssueView] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [issuesByProject, setIssuesByProject] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [issuesList, setIssuesList] = useState(null);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [friends, setFriends] = useState([]);
  const { user } = useAuth0();

  const switchTabHandler = page => {
    setCurrentTab(page);
  };

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

  // USER FRIENDS AXIOS
  const getAllFriends = () => {
    const url = `/friends/user/${user.name}`;

    axios
      .get(url)
      .then(({ data }) => {
        setFriends(data[0].friends);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addFriend = email => {
    const url = "/friends";
    const params = {
      userId: user.name,
      email
    };

    axios
      .post(url, params)
      .then(({ data }) => {
        setFriends(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // PROJECT AXIOS
  const getAllProjects = () => {
    const url = `/projects/user/${user.name}`;

    axios
      .get(url)
      .then(({ data }) => {
        setProjectList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addProject = name => {
    const url = "/projects";
    const params = {
      userId: user.name,
      name
    };

    axios
      .post(url, params)
      .then(({ data }) => {
        setProjectList([...projectList, data]);
      })
      .catch(err => {
        console.log(error);
      });
  };

  // ISSUES AXIOS FUNCTIONS
  const getAllIssues = () => {
    const url = `/issues/user/${user.name}`;

    axios
      .get(url)
      .then(({ data }) => {
        setIssuesList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getAllIssuesByProject = proj => {
    setCurrentProject(proj.name);
    const url = `/issues/user/${user.name}/project/${proj.name}`;

    axios
      .get(url)
      .then(({ data }) => {
        setIssuesByProject(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addIssue = d => {
    const url = "/issues";

    axios
      .post(url, d)
      .then(({ data }) => {
        setIssuesList([...issuesList, data]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteIssue = id => {
    const url = `/issues/${id}`;

    axios
      .delete(url)
      .then(res => {
        getAllIssues();
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProjects();
    getAllIssues();
    getAllFriends();
  }, []);

  let content = (
    <div className="row">
      <div className="container">
        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Main Page
  if (isDashboardView && projectList !== null && issuesList !== null) {
    content = (
      <>
        <Header addFriend={addFriend} addProject={addProject} />
        <div className="row">
          <ProjectList
            setCurrentTab={setCurrentTab}
            projects={projectList}
            getAllIssuesByProject={getAllIssuesByProject}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickIssueViewHandler={clickIssueViewHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
          />
          <RecentUpdatesContainer />
        </div>
        <div className="row">
          <IssuesListContainer issues={issuesList} />
        </div>
      </>
    );
  }

  // Project home
  if (isProjectHomeView && issuesByProject !== null) {
    content = (
      <>
        <div class="row">
          <ProjectHeader class="col s12 m4 l1">
            <div>{currentProject}</div>
          </ProjectHeader>
          <div className="col s12 m4 l1">
            <ProjectHome
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              clickProjectHomeHandler={clickProjectHomeHandler}
              clickDashboardHandler={clickDashboardHandler}
              clickNewIssueViewHandler={clickNewIssueViewHandler}
              clickIssueViewHandler={clickIssueViewHandler}
            />
          </div>
          <div className="col s12 m8 l10" style={{ marginTop: "7%" }}>
            <RecentUpdatesContainer />
            <StatusBar issuesByProject={issuesByProject} />
          </div>
        </div>
      </>
    );
  }

  // New issue form
  if (isNewIssueView && issuesByProject !== null) {
    content = (
      <>
        <div class="row">
          <ProjectHeader class="col s12 m4 l1">
            <div>{currentProject}</div>
          </ProjectHeader>
          <div class="col s12 m4 l1">
            <ProjectHome
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              clickProjectHomeHandler={clickProjectHomeHandler}
              clickDashboardHandler={clickDashboardHandler}
              clickNewIssueViewHandler={clickNewIssueViewHandler}
              clickIssueViewHandler={clickIssueViewHandler}
            />
          </div>
          <div class="col s12 m8 l10" style={{ marginTop: "7%" }}>
            <NewIssueForm
              friends={friends}
              currentProject={currentProject}
              addIssue={addIssue}
            />
          </div>
        </div>
      </>
    );
  }

  // Issues listing view
  if (isIssueView && issuesByProject !== null) {
    content = (
      <div class="row">
        <ProjectHeader class="col s12 m4 l1">
          <div>{currentProject}</div>
        </ProjectHeader>
        <div class="col s12 m4 l1">
          <ProjectHome
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickDashboardHandler={clickDashboardHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
            clickIssueViewHandler={clickIssueViewHandler}
          />
        </div>
        <div className="col s6 m8 l10" style={{ marginTop: "7%" }}>
          <ProjectIssuesListContainer issuesByProject={issuesByProject} />
        </div>
      </div>
    );
  }

  return content;
};

export default Home;
