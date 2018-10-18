import React , { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter as Router, Link} from 'react-router-dom';



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
				window.location.reload();
			},
			error:  (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}

	render() {
    	return (
    			<Router>
		      		<div>
				      	<input 
				      		type="text" 
				      		value={this.state.title} 
				      		onChange={ (e) => {this.setState({title:e.target.value})} } 
				     	/>
				      	<input 
				      		type="text" 
				      		value={this.state.description} 
				      		onChange={ (e)=> {this.setState({description:e.target.value})} } 
				      	/>
				      	<Link to="/" onClick={ () => {this.addTask(this.state.title,this.state.description)}}>add</Link>
		      		</div>
		      	</Router>
	    );
    }
}

export default NewTask