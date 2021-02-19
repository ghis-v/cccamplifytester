import React from 'react';
import logo from './logo.svg';
import './App.css';
import { authListener } from './AuthListener.js';
import translations from './i18n/Translations.js';

import { Button } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { Amplify,  Hub, API, Auth, I18n } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import * as mutations from './graphql/mutations.js'



// AWS services configuration
const awsConfiguration = {
	Auth:{
	  region: "eu-west-1",
      identityPoolId: "eu-west-1:a18ef388-28c6-4d03-8fea-2db52e6b13fd",
      identityPoolRegion: "eu-west-1",
      userPoolId: "eu-west-1_HdQGWzwlD",
      userPoolWebClientId: "79biet16r51b7sidef6dlveqmq"
	},
	
    aws_appsync_graphqlEndpoint: 'https://jd3unbqvvbb3tg26dpid4gjqjm.appsync-api.eu-west-1.amazonaws.com/graphql',
    aws_appsync_region: 'eu-west-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'	
	
};

// configure AWS Amplify
Amplify.configure(awsConfiguration);


// listen auth events
Hub.listen('auth', authListener);	


function App() {
	
	I18n.putVocabularies(translations);
	I18n.setLanguage('en');
	
	const [opened, setOpen] = React.useState( false );
	
	const nodeInput = { role: 1, name: "gvnode from createWithInput", parentid: 55, sub:{ prop1:"value1" } } ;
	
	const onClick =  async ()=>{
		// const newNode = await API.graphql({query: mutations.createNodeWithInput, variables: {input: nodeInput},  authMode:'AMAZON_COGNITO_USER_POOLS'});
		// console.log( newNode.data.createNodeWithInput );
		
		let { prop1: p } = nodeInput.sub ;
		
		// console.log( p ) ;		
		setOpen(true);		
		
	};
	
	const handleClose = ()=>{
		setOpen( false );
	};
	
	return (	
		<div className="App">
		
			<Button variant="contained" color="primary" onClick={onClick}>{I18n.get('Hello World')}</Button> 
			<AmplifySignOut />
		  
			<Snackbar open={opened} autoHideDuration={6000} onClose={handleClose}>
			  <Alert onClose={handleClose}  severity="success">
				This is a success message!
			  </Alert>
			</Snackbar>		  
		  
		</div>		
	);
	
}

export default withAuthenticator(App);
