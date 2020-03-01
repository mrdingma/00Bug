import React, { useEffect, useState } from 'react';
import ProjectListListEntry from './ProjectListEntry.jsx';

const ProjectList = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  // need to map the projectlistentry

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
            Projects
          </div>
          {
            isClicked
              ? null
              : <ProjectListListEntry />
          }
        </li>
      </ul>
    </div>
  );

  return content;
};

export default ProjectList;
