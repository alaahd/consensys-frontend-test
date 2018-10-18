import React , { Component } from 'react';

const TaskListEntry = ({id, task, deleteTask}) => {
  return (
    <div onClick={() => deleteTask(id)} >
        <div> {task.title}</div>
        <div >{task.description}</div>
    </div>
  );
}

export default TaskListEntry