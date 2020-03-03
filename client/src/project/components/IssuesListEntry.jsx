import React, { useEffect, useState } from 'react';
import Status from '../../dashboard/elements/status';
import date from 'date-and-time';

const IssuesListEntry = ({ issue }) => {

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

  // 1 low 2 med 3 high
  const priorityIconMapper = {
    1: 'arrow_downward',
    2: 'arrow_forward',
    3: 'arrow_upward',
  };

  /*
            <th scope="col">Created</th>
            <th scope="col">Due date</th>
            <th scope="col">Updated</th>
            <th scope="col">Registered by</th>
            <th scope="col">Attachment</th>
  */

  const dateConverter = (d) => {
    return date.format(d, 'MMM. D, YYYY');
  };


  const content = (
    <>
      <tr>
        <td><Status className="white-text" color={typeColorMapper[issue.type]}>{issue.type}</Status></td>
        <td>{issue.subject}</td>
        <td>{issue.assignee.name ? issue.assignee.name : ''}</td>
        <td><Status className="white-text" color={statusColorMapper[issue.status]}>{issue.status}</Status></td>
        <td><i className="material-icons">{priorityIconMapper[issue.priority]}</i></td>
        <td>{dateConverter(issue.created)}</td>
        <td>{issue.dueDate === '' ? '' : dateConverter(issue.dueDate)}</td>
        <td>{issue.updateDate === '' ? '' : dateConverter(issue.updateDate)}</td>
        <td>{issue.assigner.name}</td>
        <td>
          {
            issue.attachments.length === 0
              ? ''
              : <i className="material-icons">attach_file</i>
          }
        </td>
      </tr>
    </>
  );

  return content;
};

export default IssuesListEntry;
