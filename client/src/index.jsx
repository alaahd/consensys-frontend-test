import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {

insert(){
	//var number = this.state.number;

	$.ajax({
		method: 'POST',
		url: '/api/users/',
		data: {"userName":"xyz","role": "ADMIN"},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}


put(){
	//var number = this.state.number;

	$.ajax({
		method: 'PUT',
		url: '/api/users/5bc0e56faf6ee13c5768038f',
		data: {"userName":"xyz1", "role": "Normal"},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}
delete(){
	//var number = this.state.number;

	$.ajax({
		method: 'DELETE',
		url: '/api/users/5bc0e2cea69f993afac019f3',
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}
render(){
return (
	<div>
<button onClick = {this.insert.bind(this)}>ADD!</button>
<button onClick = {this.put.bind(this)}>PUT! </button>
<button onClick = {this.delete.bind(this)}>DELETE! </button>

</div>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));