import React, { useEffect, useState } from 'react';
import Status from '../elements/status';
import date from 'date-and-time';

const IssuesListEntry = ({ issue }) => {

  const statusColorMapper = {
    open: '#ED8077',
    in_progress: '#4488C5',
    resolved: '#5EB5A6',
  };

  const priorityMapper = {
    1: 'arrow_downward',
    2: 'arrow_forward',
    3: 'arrow_upward',
  };

  const dateParse = (d) => {
    return date.format(new Date(d), 'MMM. D');
  };

  const content = (
    <tr>
      <td><Status className="white-text" color={statusColorMapper[issue.status]}>{issue.status}</Status></td>
      <td><i className="material-icons">{priorityMapper[issue.priority]}</i></td>
      <td>{dateParse(issue.due_date)}</td>
      <td>{issue.subject}</td>
    </tr>
  );

  return content;
};

export default IssuesListEntry;
