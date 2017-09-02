import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {login} from '../actions/authAction';
import LoginForm from '../parts/LoginForm';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			error : ''
		}
	}
	componentWillMount(){
		const token = localStorage.getItem('user-token');
		token
			? this.props.history.push('/convert')
			: null
	}
	handleFormError=(error)=>{
		this.setState({error : error});
	}
	handleLogin=(userData)=>{
		this.props.login(userData).then(()=>{
		    localStorage.getItem('user-token')
		      	?	this.props.history.push('/convert')
		    	: 	this.setState({error : this.props.user.error.status===401?'password incorrect':'username not found'})
			});
	}
	render(){
		return(
			<div className="login">
				<div>
					<h3>Login</h3>
					<hr />
					{this.state.error? <p className="text-danger error">&#x2731; {this.state.error}</p> : null}
				</div>
				<div className="form-wrap">
					<LoginForm userData={this.handleLogin} error={this.handleFormError} />
				</div>
				<div>
					<Link to="/register">Sign Up</Link>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return{
		user : state.user
	}
}
export default connect(mapStateToProps,{login})(Login);