import React, { useEffect, useState } from 'react';
import RecentUpdatesList from './RecentUpdatesList.jsx';

const RecentUpdatesContainer = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };


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
            Recent Updates
          </div>
          {
            isClicked
              ? null
              : <RecentUpdatesList />
          }
        </li>
      </ul>
    </div>
  );

  return content;
};

export default RecentUpdatesContainer;
