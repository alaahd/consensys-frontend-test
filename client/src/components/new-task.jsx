import React , { Component } from 'react';


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
				console.log("success",data);
			},
			error:  (data) => {
			    console.error('Failed to get tasks', data);
			}
  		})
	}

	render() {
    	return (
	      	<div>
	      		<form onSubmit={ () => {this.addTask(this.state.title,this.state.description)} }>
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
		      		<input type="submit" value="Submit" />
		      	</form>
	      	</div>
	    );
    }
}

export default NewTask