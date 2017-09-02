import React,{Component} from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			email : '',
			password : '',
			confirm_password:'',
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
			username:this.state.username,
			email : this.state.email,
			password : this.state.password
		}
		!this.state.email || !this.state.password || !this.state.username || !this.state.confirm_password
			?	this.props.error('All fields required.')
			: 	this.state.password === this.state.confirm_password
				? 	(
						this.props.userData(data),
						this.setState({
							error : '',
							email:'',
							password:'',
							confirm_password:'',
							username:''
						})
					)
				: 	this.props.error('Password did not match')
	}
	render(){
		return(
			<div className="register-form">
		      	<form className="form-vertical" onSubmit={this.handleSubmit}>
		            <div className="form-group">
		                <label  htmlFor="username">Username:</label>
		                <input type="username" className="form-control" name="username" 
		                    value={this.state.username} 
		                    onChange={this.handleChange} 
		                    ref="username" />
		            </div>
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
		                <label  htmlFor="password">Confirm Password:</label>
		                <input type="password" className="form-control" name="confirm_password" 
		                    value={this.state.confirm_password} 
		                    onChange={this.handleChange} 
		                    ref="confirm_password" />
		            </div>        
		            <div className="form-group">
		               	<button type="submit" className="btn btn-primary">Register</button>
		            </div> 
		        </form>
			</div>
		);
	}
}
RegisterForm.propTypes = {
	userData: PropTypes.func.isRequired,
	error : PropTypes.func.isRequired
}

export default RegisterForm;