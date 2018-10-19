import React , { Component } from 'react';
import TaskListEntry from './task-list-entry.jsx';
import {Link} from 'react-router-dom';

const TaskList = ({tasks, deleteTask, editTask}) => {
	return (
		<div>
			<Link to="/newTask"><button className="add"></button></Link>
			<div className="listentry">
				{ tasks.map( (task) => {
											return(
													
														<TaskListEntry 
														    key={task.id}
															id={task._id} 
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
		</div>
    );
}

export default TaskList