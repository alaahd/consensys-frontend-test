import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TaskList from './components/task-list.jsx';
import NewTask from './components/new-task.jsx';

class App extends Component {
 	constructor(props) {
	    super(props);

	    this.state = {
	      tasks: []
	    };
 	}

 	componentDidMount() {
		this.getTasks();
	}

	getTasks(){
		$.ajax({
			method: 'GET',
			url: '/tasks',
			success: (tasks) => {
				this.setState({tasks:tasks.tasks})
			},
			error: (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}

	deleteTask(id){
		$.ajax({
			method: 'DELETE',
			url: `/task/delete/${id}`,
			success: (data) => {
                this.getTasks();
				console.log('task was deleted');
			},
			error: (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}

	editTask(id, title, description){
		$.ajax({
			method: 'PUT',
			url: `/task/update/${id}/${title}/${description}`,
			success: (data) => {
				this.getTasks();
				console.log('task was updated');
			},
			error: (data) => {
			    console.error('Failed to update task', data);
			}
  		})
	}

	


	render() {
    	return (
	      	<div>
		      		<h2>Use your time wisely</h2>
		        	<NewTask getTasks={()=> this.getTasks()}/>
		        	<h3> Tasks </h3>
		        	<TaskList 
		        		tasks={this.state.tasks} 
		        		deleteTask={(id) => this.deleteTask(id)}
		        		editTask={(id,title,description) => this.editTask(id,title,description)}
		        	/>
	      	</div>
	    );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));