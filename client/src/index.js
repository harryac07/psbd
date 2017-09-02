import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; // allow return function insted of plain obj

import App from './Components/App';
import Login from './Components/Login';
import Nav from './parts/Nav';
import Register from './Components/Register';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Nav />
				<Switch>
					<Route path="/convert" component={App} />
					<Route path="/register" component={Register} />
					<Route path="/" component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
