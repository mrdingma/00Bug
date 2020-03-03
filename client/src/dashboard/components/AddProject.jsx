import React, { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-materialize';

const AddProject = (props) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = () => {
    if (projectName !== '') {

    }
  };

  let content = (
    <>
      <TextInput value={projectName} placeholder="Name" onChange={(e) => setProjectName(e.target.value)} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          node="button"
          small
          waves="light"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

    </>
  );

  return content;

};

export default AddProject;