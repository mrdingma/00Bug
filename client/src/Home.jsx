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
  const [updatesList, setUpdatesList] = useState(null);
  const [issuesList, setIssuesList] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [friends, setFriends] = useState([]);
  const { user } = useAuth0();

  const clickDashboardHandler = () => {
    setCurrentTab("dashboard");
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

  // UPDATES AXIOS
  const getAllUpdates = () => {
    const url = `/updates/user/${user.name}`;

    axios
      .get(url)
      .then(({ data }) => {
        setUpdatesList(data);
      })
      .catch(err => {
        console.log(err);
      });
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

    const params2 = {
      userId: user.name,
      type: "Added a new user",
      text: `${email}`,
      assignee: email
    };

    axios
      .post("/updates", params2)
      .then(({ data }) => {
        getAllUpdates();
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

    const params2 = {
      userId: user.name,
      type: "Added a new project",
      text: name,
      project: name
    };

    axios
      .post("/updates", params2)
      .then(({ data }) => {
        getAllUpdates();
      })
      .catch(err => {
        console.log(err);
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
        getAllIssuesByProject({ name: currentProject });

        const params2 = {
          userId: user.name,
          type: "Added a new issue",
          text: data.summary,
          attachment: data.attachment,
          project: data.project,
          assignee: data.assignee
        };

        axios
          .post("/updates", params2)
          .then(({ data }) => {
            getAllUpdates();
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getIssue = id => {
    const url = `/issues?id=${id}`;

    axios
      .get(url)
      .then(({ data }) => {
        setSelectedIssue(data);
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

  const addComment = d => {
    const url = `/issues/${selectedIssue._id}/comment`;

    axios
      .put(url, d)
      .then(({ data }) => {
        getAllIssuesByProject({ name: currentProject });
        getIssue(selectedIssue._id);

        const newComment = data.comments[data.comments.length - 1];
        const params2 = {
          userId: user.name,
          type: `Comment added`,
          text: newComment.text,
          attachment: newComment.attachment,
          project: data.project,
          assignee: data.assignee
        };

        debugger;

        axios
          .post("/updates", params2)
          .then(({ data }) => {
            getAllUpdates();
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProjects();
    getAllIssues();
    getAllFriends();
    getAllUpdates();
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
  if (
    isDashboardView &&
    projectList !== null &&
    issuesList !== null &&
    updatesList !== null
  ) {
    content = (
      <>
        <Header addFriend={addFriend} addProject={addProject} />
        <div className="row">
          <div className="col s5 offset-s1">
            <div className="row">
              <ProjectList
                setSelectedIssue={setSelectedIssue}
                setCurrentTab={setCurrentTab}
                projects={projectList}
                getAllIssuesByProject={getAllIssuesByProject}
                clickProjectHomeHandler={clickProjectHomeHandler}
                clickIssueViewHandler={clickIssueViewHandler}
                clickNewIssueViewHandler={clickNewIssueViewHandler}
              />
            </div>
            <div className="col s12" style={{ padding: 0 }}>
              <IssuesListContainer
                issues={issuesList}
                setCurrentTab={setCurrentTab}
                setSelectedIssue={setSelectedIssue}
                clickIssueViewHandler={clickIssueViewHandler}
                getAllIssuesByProject={getAllIssuesByProject}
              />
            </div>
          </div>

          <div className="col s5">
            <RecentUpdatesContainer
              currentProject={currentProject}
              updatesList={updatesList}
              currentTab={currentTab}
            />
          </div>
        </div>
      </>
    );
  }

  // Project home
  if (isProjectHomeView && issuesByProject !== null) {
    content = (
      <>
        <div className="row">
          <ProjectHeader class="col s12 m4 l1">
            <div>{currentProject}</div>
          </ProjectHeader>
          <div className="col s12 m4 l1">
            <ProjectHome
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              setSelectedIssue={setSelectedIssue}
              clickProjectHomeHandler={clickProjectHomeHandler}
              clickDashboardHandler={clickDashboardHandler}
              clickNewIssueViewHandler={clickNewIssueViewHandler}
              clickIssueViewHandler={clickIssueViewHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s5 offset-s1" style={{ marginTop: "2.5em" }}>
            <RecentUpdatesContainer
              currentProject={currentProject}
              updatesList={updatesList}
              currentTab={currentTab}
            />
          </div>

          <div className="col s5 status-box">
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
              setSelectedIssue={setSelectedIssue}
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
            setSelectedIssue={setSelectedIssue}
            setCurrentTab={setCurrentTab}
            clickProjectHomeHandler={clickProjectHomeHandler}
            clickDashboardHandler={clickDashboardHandler}
            clickNewIssueViewHandler={clickNewIssueViewHandler}
            clickIssueViewHandler={clickIssueViewHandler}
          />
        </div>
        <div className="col s6 m8 l10" style={{ marginTop: "7%" }}>
          <ProjectIssuesListContainer
            addComment={addComment}
            selectedIssue={selectedIssue}
            setSelectedIssue={setSelectedIssue}
            issuesByProject={issuesByProject}
          />
        </div>
      </div>
    );
  }

  return content;
};

export default Home;
