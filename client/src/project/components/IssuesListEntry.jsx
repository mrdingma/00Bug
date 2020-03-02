import React, { useEffect, useState } from 'react';
import Status from '../../dashboard/elements/status';

const IssuesListEntry = (props) => {

  const statusColorMapper = {
    open: '#ED8077',
    in_progress: '#4488C5',
    resolved: '#5EB5A6',
  };

  const typeColorMapper = {
    request: '#EDA62A',
    task: '#B0BE3C',
    bug: '#E87758',
    other: '#3B9DBD',
  };

  const content = (
    <>
      <tr>
        <td><Status className="white-text" color={typeColorMapper.other}>Other</Status></td>
        <td>subject asasdhasdhadshahassdhs</td>
        <td>Assignee</td>
        <td><Status className="white-text" color={statusColorMapper.open}>Open</Status></td>
        <td><i className="material-icons">arrow_downward</i></td>
        <td>Mar. 18</td>
        <td>Mar. 18</td>
        <td>Mar. 18</td>
        <td>Dean Ma</td>
        <td><i className="material-icons">attach_file</i></td>
      </tr>
      <tr>
        <td><Status className="white-text" color={typeColorMapper.other}>Other</Status></td>
        <td>subject asasdhasdhadshahassdhs</td>
        <td>Assignee</td>
        <td><Status className="white-text" color={statusColorMapper.open}>Open</Status></td>
        <td><i className="material-icons">arrow_downward</i></td>
        <td>Mar. 18</td>
        <td>Mar. 18</td>
        <td>Mar. 18</td>
        <td>Dean Ma</td>
        <td><i className="material-icons">attach_file</i></td>
      </tr>
    </>
  );

  return content;
};

export default IssuesListEntry;
