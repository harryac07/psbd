import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {register} from '../actions/authAction';
import RegisterForm from '../parts/RegisterForm';

class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			error : ''
		}
	}
	handleFormError=(error)=>{
		this.setState({error : error});
	}
	handleRegister=(userData)=>{
		this.props.register(userData).then(()=>{
			// register failed
			if(!this.props.user.fetched){
					this.setState({
						error : this.props.user.error.status===500
									?'user already exists'
									:'something went wrong,try again'
					});
			}else{
				// register successful
				this.props.history.push('/');
			}
		});
	}
	render(){
		return(
			<div className="register">
				<div>
					<h3>Register</h3>
					<hr />
					{this.state.error? <p className="text-danger error">&#x2731; {this.state.error}</p> : null}
				</div>
				<div className="form-wrap">
					<RegisterForm userData={this.handleRegister} error={this.handleFormError} />
				</div>
				<div>
					<Link to="/">Sign In</Link>
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

export default connect(mapStateToProps,{register})(Register);



