import React , { Component } from 'react';
import TaskListEntry from './task-list-entry.jsx';

const TaskList = ({tasks, deleteTask, editTask}) => {
	return (
		<div>
			{ tasks.map( (task) => {
										return(
											<TaskListEntry 
											    key={task.id}
												id={task.id} 
												title={task.title} 
												description={task.description}
												deleteTask={deleteTask}
												editTask={editTask}
											/> 
										)
									}
						)
			}
		</div>
    );
}

export default TaskList