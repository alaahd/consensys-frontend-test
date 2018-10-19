import React , { Component } from 'react';
import TaskListEntry from './task-list-entry.jsx';
import {Link} from 'react-router-dom';

const TaskList = ({tasks, deleteTask, editTask}) => {
	return (
		<div>
			<Link to="/newTask">+</Link>
			<ul>
				{ tasks.map( (task) => {
											return(
													<li>
														<TaskListEntry 
														    key={task.id}
															id={task.id} 
															title={task.title} 
															description={task.description}
															deleteTask={deleteTask}
															editTask={editTask}
														/> 
													</li>
											)
										}
							)
				}
			</ul>
		</div>
    );
}

export default TaskList