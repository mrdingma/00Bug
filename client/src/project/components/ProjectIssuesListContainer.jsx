import React, { useEffect, useState } from 'react';
import IssuesListEntry from './IssuesListEntry.jsx';

const ProjectIssuesListContainer = (props) => {

  let content = (
    <div className="responsive-table collapsible">
      <table className="highlight centered responsive-table">
        <thead className="grey lighten-4">
          <tr>
            <th scope="col">Issue Type</th>
            <th scope="col">Subject</th>
            <th scope="col">Assignee</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Created</th>
            <th scope="col">Due date</th>
            <th scope="col">Updated</th>
            <th scope="col">Registered by</th>
            <th scope="col">Attachment</th>
          </tr>
        </thead>
        <tbody>
          {
            props.issuesByProject.map((issue) => <IssuesListEntry key={issue.id} issue={issue} />)
          }
        </tbody>
      </table>
    </div>
  );

  return content;
};

export default ProjectIssuesListContainer;
