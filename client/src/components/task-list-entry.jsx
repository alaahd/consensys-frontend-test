import React , { Component } from 'react';
import $ from 'jquery';

class TaskListEntry extends Component {
 	constructor(props) {
	    super(props);
     
	    this.state = {
	      editFlag:false,
	      titlee:"",
	      descriptionn:""
	    };
 	}

	// getTask(id){
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: `/task/${id}`,
	// 		success: (task) => {
	// 			this.setState({id:task.id,title:task.title,description:task.description})
	// 		},
	// 		error: (data) => {
	// 		    console.error('Failed to get updated task', data);
	// 		}
 //  		})
	// }


	render() {
	 			if(!this.state.editFlag){
					return (
					    <div>
					    	<button onClick={() => this.props.deleteTask(this.props.id)}>deleteTask</button>
					    	<button onClick={() => this.setState({editFlag:!this.state.editFlag})}>editTask</button>
					        <div> {this.props.title}</div>
					        <div >{this.props.description}</div>
					    </div>
					);
				}
				else{
					return (
					    <div>
			      			<form onSubmit={ () => {this.props.editTask(this.props.id,this.state.title,this.state.description)}}>
					      		<input 
					      			type="text" 
					      			value={this.state.title} 
					      			onChange={ (e) => {this.setState({title:e.target.value}) } }
					      		/>
					      		<input 
					      			type="text" 
					      			value={this.state.description} 
					      			onChange={ (e)=> {this.setState({description:e.target.value}) } }
					      		/>
					      		<input type="submit" value="Submit" />
					      	</form>
	      				</div>
					);
				}
	} 
}

export default TaskListEntry