import React from 'react';
import {Navbar,NavItem} from 'react-bootstrap';
import {Link}  from 'react-router-dom';
const Nav=(props)=>{
	return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="#">Currency Exchange</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">Signup</Link></li>
                </ul>
            </div>
        </nav>
	);
}
export default Nav;