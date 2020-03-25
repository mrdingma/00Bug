import React, { useEffect, useState } from "react";
import { DatePicker } from "react-materialize";
import FormBody from "../elements/formBody";
import date from "date-and-time";
import { useAuth0 } from "../../auth0.jsx";
import M from "materialize-css/dist/js/materialize.min.js";

const NewIssueForm = ({ currentProject, addIssue, friends, addProject }) => {
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("task");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assigneeText, setAssigneeText] = useState("");
  const [assignee, setAssignee] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [confirmScreen, setConfirmScreen] = useState(false);

  const dueDateHandler = d => {
    setDueDate(date.format(d, "YYYY-MM-DD"));
  };

  const { user } = useAuth0();

  const attachmentHandler = e => {
    const file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpeg"
    ) {
      setAttachment(file);
    } else {
      M.toast({
        html: "Only acceptable formats are JPG or PNG format",
        inDuration: 100,
        outDuration: 100
      });
    }
  };

  const clickAddIssueHandler = () => {
    const payload = new FormData();
    payload.append("image", attachment);
    payload.set("userId", user.email);
    payload.set("name", user.name);
    payload.set("project", currentProject);
    payload.set("status", "open");
    payload.set("due_date", dueDate);
    payload.set("picture", user.picture);
    payload.set("summary", subject);
    payload.set("priority", priority);
    payload.set("type", type);
    payload.set("description", description);
    payload.set("assignee", assignee);
    payload.set("assigner", user.email);

    // add project to each assignee
    assignee.forEach(email => addProject(email, currentProject));

    addIssue(payload);
    setAttachment("");
    setConfirmScreen(true);
  };

  const isEmail = email => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  const isInList = email => {
    return assignee.includes(email);
  };

  const isValid = email => {
    if (isInList(email)) {
      return false;
    }

    if (!isEmail(email)) {
      return false;
    }

    return true;
  };

  const createChip = text => {
    if (text && isValid(text)) {
      setAssignee([...assignee, text]);
      setAssigneeText("");
    } else if (isInList(text)) {
      M.toast({
        html: "Already added",
        inDuration: 100,
        outDuration: 100
      });
    } else {
      M.toast({
        html: "Invalid email format",
        inDuration: 100,
        outDuration: 100
      });
    }
  };

  const handleKeyDown = e => {
    if (["Enter", "Tab", ","].includes(e.key)) {
      e.preventDefault();
      var value = assigneeText.trim();

      createChip(value);
    }
  };

  const handleChange = e => {
    setAssigneeText(e.target.value);
  };

  const handleDelete = email => {
    setAssignee(assignee.filter(text => text !== email));
  };

  const handlePaste = e => {
    e.preventDefault();

    var paste = e.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !isInList(email));

      setAssignee([...assignee, ...toBeAdded]);
    }
  };

  const autoCompleteHandler = e => {
    createChip(e.target.innerText);
    setAssigneeText("");
  };

  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
    M.textareaAutoResize($("#textarea1"));
  });

  let content = (
    <>
      <div className="row">
        <form className="col s12">
          <div name="type" className="row">
            <div className="col s2">
              <select
                className="selectTask"
                onChange={e => setType(e.target.value)}
              >
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="request">Request</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div name="subject" className="row">
            <div className="input-field col s12">
              <input
                id="subject"
                type="text"
                className="validate"
                onChange={e => setSubject(e.target.value)}
              />
              <label for="subject">Subject</label>
            </div>
          </div>
          <div name="mainBody" className="row">
            <FormBody name="mainBody" className="row">
              <div className="col s1">Description</div>
              <div className="col s11">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <div
                className="col s5"
                style={{
                  display: "flex",
                  paddingLeft: "24px",
                  marginTop: "10px"
                }}
              >
                <div>Status</div>
                <div style={{ paddingLeft: "24px" }}>Open</div>
              </div>
              <div
                className="col s5 offset-s2"
                style={{
                  display: "flex",
                  paddingLeft: "24px",
                  marginTop: "10px"
                }}
              >
                <div>Assignee</div>
                <div style={{ paddingLeft: "24px", width: "100%" }}>
                  {assignee.map(item => (
                    <div className="tag-item" key={item}>
                      {item}
                      <button
                        type="button"
                        className="button"
                        onClick={() => handleDelete(item)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <input
                    className="input"
                    value={assigneeText}
                    placeholder="Type email(s) and press Enter"
                    onKeyDown={e => handleKeyDown(e)}
                    onChange={e => handleChange(e)}
                    onPaste={e => handlePaste(e)}
                  />
                  {assigneeText.length > 0 && (
                    <ul className="autocomplete-ul">
                      {friends
                        .filter(friend => friend.includes(assigneeText))
                        .map(friend => (
                          <li
                            className="autocomplete-li"
                            onClick={autoCompleteHandler}
                          >
                            <span>{friend}</span>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
              <div
                className="col s5"
                style={{
                  display: "flex",
                  paddingLeft: "24px",
                  marginTop: "10px"
                }}
              >
                <div>Priority</div>
                <div style={{ paddingLeft: "24px" }}>
                  <select
                    className="selectTask"
                    onChange={e => setPriority(e.target.value)}
                  >
                    <option value="" />
                    <option value={"Low"}>Low</option>
                    <option value={"Normal"}>Normal</option>
                    <option value={"High"}>High</option>
                  </select>
                </div>
              </div>
              <div
                name="duedate"
                className="col s5 offset-s2"
                style={{
                  display: "flex",
                  paddingLeft: "24px",
                  marginTop: "10px"
                }}
              >
                <div>Due date</div>
                <div style={{ paddingLeft: "24px" }}>
                  <DatePicker
                    value={dueDate}
                    id="myDate"
                    onChange={d => dueDateHandler(d)}
                  />
                </div>
              </div>
              <div
                className="col s5"
                style={{
                  display: "flex",
                  paddingLeft: "24px",
                  marginTop: "10px"
                }}
              >
                <div>
                  <form action="#">
                    <div className="file-field input-field">
                      <div className="waves-effect btn-small">
                        <span>Attach</span>
                        <input
                          type="file"
                          onChange={e => attachmentHandler(e)}
                        />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col s5 offset-s2"
                style={{ paddingLeft: "17%", paddingTop: "3%" }}
              >
                <a class="waves-effect btn" onClick={clickAddIssueHandler}>
                  Add
                </a>
              </div>
            </FormBody>
          </div>
        </form>
      </div>
    </>
  );

  if (confirmScreen) {
    content = (
      <>
        <div className="row issue-confirm">
          <div style={{ marginBottom: "0.5em", fontWeight: "100" }}>
            Issue has been added
          </div>
          <div>
            <a class="waves-effect btn" onClick={() => setConfirmScreen(false)}>
              Add another Issue
            </a>
          </div>
        </div>
      </>
    );
  }

  return content;
};

export default NewIssueForm;
