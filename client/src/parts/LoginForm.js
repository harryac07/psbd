import React,{Component} from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state={
			email : '',
			password : '',
			error : ''
		}
	}
	handleChange=(e)=>{
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		const data={
			email : this.state.email,
			password : this.state.password
		}
		!this.state.email || !this.state.password
			?	this.props.error('All fields required.')
			: 	(
					this.props.userData(data),
					this.setState({error : '',email:'',password:''})
				)
	}
	render(){
		return(
			<div className="login-form">
		      	<form className="form-vertical" onSubmit={this.handleSubmit}>
		            <div className="form-group">
		                <label  htmlFor="email">Email:</label>
		                <input type="email" className="form-control" name="email" 
		                    value={this.state.email} 
		                    onChange={this.handleChange} 
		                    ref="email" />
		            </div>
		            <div className="form-group">
		                <label  htmlFor="password">Password:</label>
		                <input type="password" className="form-control" name="password" 
		                    value={this.state.password} 
		                    onChange={this.handleChange} 
		                    ref="password" />
		            </div>       
		            <div className="form-group">
		               	<button type="submit" className="btn btn-primary">Login</button>
		            </div> 
		        </form>
			</div>
		);
	}
}
LoginForm.propTypes = {
	userData: PropTypes.func.isRequired,
	error : PropTypes.func.isRequired
}

export default LoginForm;