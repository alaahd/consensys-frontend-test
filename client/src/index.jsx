import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TaskList from './components/task-list.jsx';
import NewTask from './components/new-task.jsx';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


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
				this.setState({tasks:tasks})
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

    //Wrapper functions to render components with props depending on the route 

	showNewTask(){
		return <NewTask  getTasks={()=> this.getTasks()}/>
	}

 	showTaskList(){
		return (
			<TaskList 
				tasks={this.state.tasks} 
				deleteTask={(id) => this.deleteTask(id)}
				editTask={(id,title,description) => this.editTask(id,title,description)}
			/>
		)
	}


	render() {
    	return (
    			<Router>
		      		<div>
						<Route exact path='/newTask' render={() => this.showNewTask()}/>
			    		<Route exact path='/'  render={() => this.showTaskList()}/>
		     		</div>
		      	</Router>
	    );
    }
}

export default App;

ReactDOM.render(<App />,document.getElementById('app'));