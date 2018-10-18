import React , { Component } from 'react';
import TaskListEntry from './task-list-entry.jsx';

const TaskList = ({tasks, deleteTask}) => {
	return (
		<div>
			{ tasks.map( (task) => {
										return(
											<TaskListEntry 
												id={task.id} 
												task={task} 
												deleteTask={deleteTask}
											/> 
										)
									}
						)
			}
		</div>
    );
}

export default TaskList