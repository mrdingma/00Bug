import React, { useEffect, useState } from 'react';
import IssuesListEntry from './IssuesListEntry.jsx';

const IssuesList = (props) => {
  const content = (
    <div className="responsive-table collapsible">
      <table className="highlight centered">
        <thead className="grey lighten-4">
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Due</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
        <tbody>
          <IssuesListEntry />
        </tbody>
      </table>
    </div>
  );

  return content;
};

export default IssuesList;