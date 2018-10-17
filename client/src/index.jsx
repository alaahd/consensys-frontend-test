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
				this.setState({tasks})
			},
			error: (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}


	render() {
    	return (
	      	<div>
	      		<h3>Manage your tasks and START</h3>
	        	<NewTask getTasks={this.getTasks}/>
	        	<TaskList tasks={this.state.tasks}/>
	      	</div>
	    );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));