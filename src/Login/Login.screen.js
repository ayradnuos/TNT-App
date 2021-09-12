import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import LoginView from './Login.view';
import { saveAccessToken } from './Login.slice';
import { auth0 } from '../common/store';

const LoginScreen = props => {
	const dispatch = useDispatch();

	const [isLoading, setLoading] = useState(false);

	const doAuth = () => {
		setLoading(true);
		auth0.webAuth
			.authorize({ scope: 'openid profile email' })
			.then(credentials =>
				// Successfully authenticated
				// Store the accessToken
				{
					console.log('Credentials: ', credentials);
					// setCreds(credentials);
					dispatch(saveAccessToken(credentials.accessToken));
				},
			)
			.catch(error => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	return <LoginView doAuth={doAuth} isLoading={isLoading} />;
};

export default LoginScreen;
