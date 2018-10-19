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

	render() {
	 			if(!this.state.editFlag){
					return (
					    <div>
					    	<button className="close" onClick={() => this.props.deleteTask(this.props.id)}></button>
					    	<button className="edit" onClick={() => this.setState({editFlag:!this.state.editFlag})}></button>
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
					      			placeholder="Edit task title"
					      		/>
					      		<input 
					      			type="text" 
					      			value={this.state.description} 
					      			onChange={ (e)=> {this.setState({description:e.target.value}) } }
					      			placeholder="Edit task description"
					      		/>
					      		<input type="submit" value="Submit" />
					      	</form>
	      				</div>
					);
				}
	} 
}

export default TaskListEntry