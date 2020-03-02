import React, { useEffect, useState } from 'react';
import { DatePicker } from 'react-materialize';
import FormBody from '../elements/formBody';

const NewIssueForm = (props) => {
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('task');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [attachment, setAttachment] = useState('');

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    M.textareaAutoResize($('#textarea1'));
  });

  let content = (
    <>
      <div className="row">
        <form className="col s12">
          <div name="type" className="row">
            <div className="input-field col s2">
              <select className="selectTask" onChange={(e) => setType(e.target.value)}>
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="request">Request</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div name="subject" className="row" >
            <div className="input-field col s12">
              <input id="subject" type="text" className="validate" onChange={(e) => setSubject(e.target.value)} />
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="col s5" style={{ display: 'flex', paddingLeft: '24px', marginTop: '10px' }}>
                <div>Status</div>
                <div style={{ paddingLeft: '24px' }}>Open</div>
              </div>
              <div className="col s5 offset-s2" style={{ display: 'flex', paddingLeft: '24px', marginTop: '10px' }}>
                <div>Assignee</div>
                <div style={{ paddingLeft: '24px' }}>
                  <select className="selectTask" onChange={(e) => setAssignee(e.target.value)}>
                    <option value=" " />
                    <option value="userId">Dean Ma</option>
                  </select>
                </div>
              </div>
              <div className="col s5" style={{ display: 'flex', paddingLeft: '24px', marginTop: '10px' }}>
                <div>Priority</div>
                <div style={{ paddingLeft: '24px' }}>
                  <select className="selectTask" onChange={(e) => setPriority(e.target.value)}>
                    <option value=" " />
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="col s5 offset-s2" style={{ display: 'flex', paddingLeft: '24px', marginTop: '10px' }}>
                <div>Due date</div>
                <div style={{ paddingLeft: '24px' }}>
                  <DatePicker
                    value={dueDate}
                    id="myDate"
                    onChange={(date) => setDueDate(date)}
                  />
                </div>
              </div>
              <div className="col s5">
                <form action="#">
                  <div className="file-field input-field">
                    <div className="waves-effect btn-small">
                      <span>Attach</span>
                      <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col s5 offset-s2">
                <a class="waves-effect btn">button</a>
              </div>
            </FormBody>
          </div>
        </form>
      </div>

    </>
  );
  return content;
};

export default NewIssueForm;