import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Modal, TextInput, Button } from "react-materialize";

const Header = ({ addProject, addFriend }) => {
  const [projectName, setProjectName] = useState("");
  const [newFriend, setNewFriend] = useState("");

  const handleAddNewProject = () => {
    if (projectName !== "") {
      addProject(projectName);
      setProjectName("");
    }
  };

  const handleAddNewFriend = () => {
    if (/(.)+@(.)+.(.)+/gi.test(newFriend)) {
      addFriend(newFriend);
      setNewFriend("");
    } else {
      alert("Enter a valid email address");
      setNewFriend("");
    }
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { hover: true });
  });

  const trigger = (
    <li>
      <a>Add Project</a>
    </li>
  );

  const addUserTrigger = (
    <li>
      <a>Add User</a>
    </li>
  );

  const content = (
    <div>
      <nav>
        <div className="nav-wrapper grey lighten-4">
          <a
            href="#"
            className="brand-logo"
            style={{ left: "5px", top: "-16px" }}
          >
            <span className="black-text">
              <img
                src="logo.png"
                style={{ height: "15%", width: "15%", top: "5px" }}
              />
              bugtracker
            </span>
          </a>
          <ul
            id="nav-mobile"
            style={{ paddingRight: "20px" }}
            className="right hide-on-med-and-down"
          >
            <li>
              <a className="dropdown-trigger" data-target="dropdown1">
                <i className="material-icons black-text">add</i>
              </a>
              <ul id="dropdown1" className="dropdown-content">
                <Modal
                  header="Add Project"
                  actions={[
                    <Button
                      flat
                      modal="close"
                      node="button"
                      waves="green"
                      onClick={handleAddNewProject}
                    >
                      Submit
                    </Button>
                  ]}
                  trigger={trigger}
                >
                  <TextInput
                    value={projectName}
                    placeholder="Name"
                    onChange={e => setProjectName(e.target.value)}
                  />
                </Modal>
                <Modal
                  header="Add User"
                  actions={[
                    <Button
                      flat
                      modal="close"
                      node="button"
                      waves="green"
                      onClick={handleAddNewFriend}
                    >
                      Submit
                    </Button>
                  ]}
                  trigger={addUserTrigger}
                >
                  <TextInput
                    type="email"
                    value={newFriend}
                    required
                    placeholder="email"
                    onChange={e => setNewFriend(e.target.value)}
                  />
                </Modal>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  return content;
};

export default Header;
