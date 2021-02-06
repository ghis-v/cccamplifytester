import { Logger } from 'aws-amplify';

const logger = new Logger('My-Logger');

const listener = (data) => {
		
	
	console.log(data);
	
	// eslint-disable-next-line
    switch (data.payload.event) {
        case 'signIn':
			console.log('user signed in');
            logger.info('user signed in');
            break;
        case 'signUp':
            logger.info('user signed up');
            break;
        case 'signOut':
            logger.info('user signed out');
            break;
        case 'signIn_failure':
            logger.error('user sign in failed');
            break;
        case 'tokenRefresh':
            logger.info('token refresh succeeded');
            break;
        case 'tokenRefresh_failure':
            logger.error('token refresh failed');
            break;
        case 'configured':
            logger.info('the Auth module is configured');
    }
}

export { listener as authListener };