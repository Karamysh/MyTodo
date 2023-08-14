import React from 'react';
import './App.css';
import { NewTaskInput } from './NewTaskInput';
import { useSelector } from 'react-redux';
import { TasksState } from './tasksReducer';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

function App() {
  const tasks = useSelector<TasksState, TasksState['tasks']>(
    (state) => state.tasks,
  );
  const dispatch = useDispatch();
  const onAddTask = (task: string) => {
    dispatch(addTask(task));
  };

  return (
    <>
      <NewTaskInput addTask={onAddTask} />
      <hr />
      <ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
