import React , { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';



class NewTask extends Component {

 	constructor(props) {
	    super(props);

	    this.state = {
	      	title:"",
	      	description:""
	    };
 	} 

 	addTask(title,description){
		$.ajax({
			method: 'POST',
			url: `/task/create/${title}/${description}`,
			success:  (msg) => {
				this.props.getTasks();
				console.log("success",msg);
			},
			error:  (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}

	render() {
    	return (
		      		<div className="NewTask">
				      	<input 
				      		type="text" 
				      		value={this.state.title} 
				      		onChange={ (e) => {this.setState({title:e.target.value})} } 
				      		placeholder="Task title"
				     	/>
				      	<input 
				      		type="text" 
				      		value={this.state.description} 
				      		onChange={ (e)=> {this.setState({description:e.target.value})} } 
				      		placeholder="Task description"
				      	/>
				      	<Link to="/"  onClick={ () => {this.addTask(this.state.title,this.state.description)}}><button className="addBtn" >add</button></Link>
		      		</div>
	    );
    }
}

export default NewTask