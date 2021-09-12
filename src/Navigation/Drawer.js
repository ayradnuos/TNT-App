import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { auth0 } from '../common/store';
import { clearAccessToken } from '../Login/Login.slice';

const Drawer = props => {
	const dispatch = useDispatch();

	const logout = () =>
		auth0.webAuth
			.clearSession({})
			.then(success => {
				Alert.alert('Logged out!');
				dispatch(clearAccessToken());
			})
			.catch(error => {
				console.log('Log out cancelled');
			});

	return (
		<DrawerContentScrollView style={{ backgroundColor: '#e9ecef' }} {...props}>
			<DrawerItemList {...props} />
			<DrawerItem label="Logout" onPress={logout} />
		</DrawerContentScrollView>
	);
};

export { Drawer };
