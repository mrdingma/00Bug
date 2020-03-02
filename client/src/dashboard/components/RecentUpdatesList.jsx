import React, { useEffect, useState } from 'react';
import RecentUpdatesEntry from './RecentUpdatesEntry.jsx';
import date from 'date-and-time';

const RecentUpdatesList = (props) => {
  // const [isClicked, setIsClicked] = useState(false);

  // const onClickHandler = () => {
  //   setIsClicked(!isClicked);
  // };

  const now = date.format(new Date(), 'ddd MMM. DD, YYYY');


  let content = (
    <>
      <table className="responsive-table collapsible">
        <thead>
          <tr>
            <th>{now}</th>
          </tr>
          <tr>
            {/* <RecentUpdatesEntry /> */}
          </tr>
        </thead>
      </table>

    </>
  );

  return content;
};

export default RecentUpdatesList;
