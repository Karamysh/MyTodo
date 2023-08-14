import React from 'react';
import './App.css';
import { NewTaskInput } from './NewTaskInput';

function App() {
  return (
    <>
      <NewTaskInput addTask={alert} />
      <hr />
      <ul>
        <li>Task</li>
      </ul>
    </>
  );
}

export default App;
