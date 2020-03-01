import React, { useEffect, useState } from 'react';
import IssuesList from './IssuesList.jsx';

const IssuesListContainer = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  // need to map the issuesList

  let content = (
    <div className="col s5 offset-s1">
      <ul>
        <li>
          <div onClick={onClickHandler}>
            {
              isClicked
                ? <i className="material-icons">keyboard_arrow_down</i>
                : <i className="material-icons">keyboard_arrow_up</i>
            }
            My Issues
          </div>
          {
            isClicked
              ? null
              : <IssuesList />
          }
        </li>
      </ul>
    </div>
  );

  return content;
};

export default IssuesListContainer;
