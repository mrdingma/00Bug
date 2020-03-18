import React, { useEffect, useState } from "react";

const SideBarBtnEntry = ({
  currentTab,
  setCurrentTab,
  type,
  clickIssueViewHandler,
  clickProjectHomeHandler,
  clickNewIssueViewHandler
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = value => {
    setIsHovered(value);
  };

  const typeToText = {
    home: "Home",
    add: "Add Issue",
    storage: "Issues"
  };

  const typeToTab = {
    home: "home",
    add: "new_issue",
    storage: "issue_list"
  };

  const onClickHandler = e => {
    if (
      e.target.name === "home" ||
      e.target.innerText.toLowerCase().includes("home")
    ) {
      setCurrentTab("home");
      clickProjectHomeHandler();
    } else if (
      e.target.name === "add" ||
      e.target.innerText.toLowerCase().includes("add")
    ) {
      setCurrentTab("new_issue");
      clickNewIssueViewHandler();
    } else {
      setCurrentTab("issues");
      clickIssueViewHandler();
    }
  };

  const colorSelector = t => {
    if (isHovered || currentTab === typeToTab[t]) {
      return "#4CAF93";
    }
    return "white";
  };

  const bgColorSelector = t => {
    if (isHovered || currentTab === typeToTab[t]) {
      return "white";
    }
    return "#4CAF93";
  };

  let content = (
    <li
      className="tooltipped sidebtn"
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      name={type}
      style={{
        color: colorSelector(type),
        backgroundColor: bgColorSelector(type)
      }}
      onClick={e => onClickHandler(e)}
    >
      <i name={type} className="sideIcon material-icons">
        {type}
      </i>
      <div className="sidebtnTxt">{typeToText[type]}</div>
    </li>
  );

  return content;
};

export default SideBarBtnEntry;
