import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import ProjectList from './ProjectList.jsx';
import RecentUpdatesContainer from './RecentUpdatesContainer.jsx';
import IssuesListContainer from './IssuesListContainer.jsx';

const App = (props) => {

  let content = (
    <div>
      <Header />
      <div className="row">
        <ProjectList />
        <RecentUpdatesContainer />
      </div>
      <div className="row">
        <IssuesListContainer />
      </div>
    </div>
  );

  return content;
};

export default App;
