import React, { useState, useEffect } from "react";
import FormBody from "../elements/formBody";
import IssueTypeTag from "./IssueTypeTag.jsx";
import IssueStatusTag from "./IssueStatusTag.jsx";
import date from "date-and-time";
import {
  Collection,
  CollectionItem,
  Select,
  Textarea
} from "react-materialize";
import { useAuth0 } from "../../auth0.jsx";

const ProjectSingleIssue = ({ selectedIssue, addComment }) => {
  const [status, setStatus] = useState(null);
  const [comment, setComment] = useState("");
  const [attachment, setAttachment] = useState(false);

  const dateParse = d => {
    return d === null ? "" : date.format(new Date(d), "MMM. D, Y");
  };

  const dateParse2 = d => {
    return d === null ? "" : date.format(new Date(d), "MMM. D, Y h:mm:ss A");
  };

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

  const { user } = useAuth0();

  const statuses = {
    open: "Open",
    in_progress: "In Progress",
    resolved: "Resolved",
    closed: "closed"
  };

  const clickHandler = () => {
    const payload = new FormData();
    payload.append("image", attachment);
    payload.set("status", status);
    payload.set("text", comment);
    payload.set("userId", user.email);
    payload.set("name", user.name);
    payload.set("picture", user.picture);

    addComment(payload);
    setComment("");
    setAttachment("");
  };

  useEffect(() => {
    setStatus(selectedIssue.status);
  }, []);

  let content = (
    <>
      <div className="row">
        <div className="col s1-offset s8">
          <IssueTypeTag issue={selectedIssue} />
          <span style={{ marginLeft: ".5em" }}>{selectedIssue.summary}</span>
        </div>
        <div
          className="col s4"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <span style={{ color: "red" }}>Due date </span>
          <span style={{ marginLeft: ".5em", color: "red" }}>
            {dateParse(selectedIssue.due_date)}
          </span>
          <span style={{ marginLeft: ".5em" }}>
            <IssueStatusTag issue={selectedIssue} />
          </span>
        </div>
      </div>
      <div name="mainBody" style={{ marginBottom: 0 }} className="row">
        <FormBody name="mainBody" className="row">
          <Collection>
            <CollectionItem className="avatar">
              <img alt="" className="circle" src={selectedIssue.picture} />
              <span className="title">{selectedIssue.assigner}</span>
              <p>Created {dateParse2(selectedIssue.created_date)}</p>
            </CollectionItem>
          </Collection>
          <div className="row">
            <div className="col s1" style={{ marginBottom: "0.5em" }}>
              Description:
            </div>
            <div className="col s11">{selectedIssue.description}</div>
          </div>

          <div className="row">
            <div className="col s1" style={{ marginBottom: "0.5em" }}>
              Priority:
            </div>
            <div className="col s5" style={{ minWidth: "auto" }}>
              {selectedIssue.priority}
            </div>
            <div className="col s1" style={{ marginBottom: "0.5em" }}>
              Assignee:
            </div>
            <div className="col s5" style={{ minWidth: "auto" }}>
              {selectedIssue.assignee}
            </div>
          </div>

          {selectedIssue.attachment !== "" && (
            <>
              <div className="row">
                <div className="col s1">Attachment:</div>
                <div
                  className="col s11"
                  style={{ minWidth: "auto", marginBottom: "1em" }}
                >
                  <img
                    style={{ width: "25%" }}
                    src={selectedIssue.attachment}
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </FormBody>
      </div>
      <div
        name="mainBody"
        className="row"
        style={{ display: "flex", marginBottom: 0 }}
      >
        <div>
          <form action="#">
            <div className="file-field input-field">
              <div>
                <i
                  className="fas fa-paperclip comment-attach"
                  style={{ color: attachment ? "#2ABBAD" : "grey" }}
                />
                <input type="file" onChange={e => attachmentHandler(e)} />
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "65%" }}>
          <Textarea
            className="comment-box"
            placeholder="Comment"
            style={{ width: "100%" }}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>
        <div>
          <Select label="Status" onChange={e => setStatus(e.target.value)}>
            {Object.keys(statuses).map(status =>
              selectedIssue.status === status ? (
                <option value={status} selected>
                  {statuses[status]}
                </option>
              ) : (
                <option value={status}>{statuses[status]}</option>
              )
            )}
          </Select>
        </div>
        <div style={{ marginTop: "0.5em" }}>
          <a class="waves-effect btn" onClick={clickHandler}>
            Add Comment
          </a>
        </div>
      </div>
      <div
        className="row"
        style={{ paddingBottom: "0.5em", borderBottom: "1px solid" }}
      >
        <div className="col s12">
          <span style={{ fontWeight: 700 }}>Comments</span> (
          {selectedIssue.comments.length})
        </div>
      </div>
      <div className="row">
        {selectedIssue.comments.map(comment => (
          <>
            <div className="row">
              <Collection>
                <CollectionItem className="avatar">
                  <img alt="" className="circle" src={comment.picture} />
                  <span className="title">{comment.userId}</span>
                  <p>
                    Created {dateParse2(comment.date)}
                    <br />
                    <br />
                    {comment.text}
                    <br />
                    {comment.attachment.length !== "" ? (
                      <img
                        style={{ width: "25%" }}
                        src={comment.attachment}
                        alt=""
                      />
                    ) : null}
                  </p>
                </CollectionItem>
              </Collection>
            </div>
          </>
        ))}
      </div>
    </>
  );

  return content;
};

export default ProjectSingleIssue;
