import React, { useEffect, useState } from 'react';
import Status from '../elements/status';

const IssuesListEntry = (props) => {

  const colorMapper = {
    open: '#ED8077',
    in_progress: '#4488C5',
    resolved: '#5EB5A6',
  };

  const content = (
    <tr>
      <th scope="row"><Status color='#ED8077'>Open</Status></th>
      <td><i className="material-icons">arrow_downward</i></td>
      <td>Mar. 18</td>
      <td>subject 2</td>
    </tr>
  );

  return content;
};

export default IssuesListEntry;
