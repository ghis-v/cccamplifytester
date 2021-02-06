import React from 'react';
import logo from './logo.svg';
import './App.css';
import { authListener } from './AuthListener.js';
import { Hub } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

Hub.listen('auth', authListener);	


function App() {
			
	return (
	<div className="App">
	  <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
		  We now have Auth!	  
		</p>
	  </header>
	  <AmplifySignOut />
	</div>
	);
}

export default withAuthenticator(App);
