import React,{Component} from 'react';
import {Link}  from 'react-router-dom';
import {withRouter} from 'react-router-dom';
class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            loggedIn : false,
            currentUser:{}
        }
    }
    componentWillMount(){
        const token = localStorage.getItem('user-token');
        token 
          ?   this.getCurrentUser(token)
          :   null
        
    }
    componentDidUpdate(){
        /* user loggedin status */
        if(localStorage.getItem('user-token') && this.state.loggedIn===false){
            this.getCurrentUser(localStorage.getItem('user-token'));
        }
    }
    getCurrentUser=(token)=>{
        const payload = JSON.parse(window.atob(token.split('.')[1]));
        const userdata = {
            _id:payload._id,
            email: payload.email,
            name: payload.name
        };
        this.setState({currentUser : userdata,loggedIn:true})   
    }
    logout=()=>{
        localStorage.removeItem('user-token');
        this.props.history.push('/');
        window.location.reload();
    }
    render(){
    	return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top-nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <Link className="navbar-brand active" to="/">Currency Exchange</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="top-nav">
                        <ul className="nav navbar-nav navbar-right dropdown">
                        {
                            !this.state.loggedIn
                                ?   (
                                        [<li key={1}><Link to="/login">Login</Link></li>,
                                        <li key={2}><Link to="/register">Signup</Link></li>]
                                    )
                                :   <li onClick={this.logout}><Link to="/" className="logout">LOGOUT</Link></li>
                        }
                        </ul>
                    </div>
                </div>
            </nav>
    	);
    }
}
export default withRouter(Nav);