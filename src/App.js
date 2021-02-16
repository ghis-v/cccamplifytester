import React from 'react';
import logo from './logo.svg';
import './App.css';
import { authListener } from './AuthListener.js';

import { Button } from '@material-ui/core';

import { Amplify, Hub } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const awsConfiguration = {
    "aws_project_region": "eu-west-1",
    "aws_cognito_identity_pool_id": "eu-west-1:a18ef388-28c6-4d03-8fea-2db52e6b13fd",
    "aws_cognito_region": "eu-west-1",
    "aws_user_pools_id": "eu-west-1_HdQGWzwlD",
    "aws_user_pools_web_client_id": "79biet16r51b7sidef6dlveqmq"
};

Amplify.configure(awsConfiguration);
Hub.listen('auth', authListener);	


function App() {
			
	return (	
	<div className="App">
	  <Button variant="contained" color="primary">Hello World</Button> 
	  <AmplifySignOut />
	</div>
	);
}

export default withAuthenticator(App);
