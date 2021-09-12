import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Login/Login.screen';
import DashboardScreen from '../Dashboard/Dashboard.screen';
import { TouchableOpacity } from 'react-native';
import Menu from '../../assets/Icons/Menu.svg';
import SearchScreen from '../Search/Search.screen';
import SubscriptionScreen from '../Subscriptions/Subscriptions.screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditSubScreen from '../Subscriptions/EditSub.screen';
import { useSelector } from 'react-redux';
import { Splash } from '../common/Splash.view';
import { Drawer as CustomDrawer } from './Drawer';

const StackNav = createNativeStackNavigator();
const SubStackNav = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainFlow = () => (
	<StackNav.Navigator
		initialRouteName="Dashboard"
		screenOptions={{
			headerShown: false,
		}}>
		<StackNav.Screen name="Dashboard" component={DashboardScreen} />
		<StackNav.Screen name="Search" component={SearchScreen} />
	</StackNav.Navigator>
);

const SubStack = () => (
	<SubStackNav.Navigator
		screenOptions={{
			headerShown: false,
		}}>
		<SubStackNav.Screen name="Subscription" component={SubscriptionScreen} />
		<StackNav.Screen name="EditSub" component={EditSubScreen} />
	</SubStackNav.Navigator>
);

const MyDrawer = () => {
	return (
		<Drawer.Navigator
			drawerContent={props => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: '#212529',
				},
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerTitle: 'TNT',
			}}>
			<Drawer.Screen name="Dashboard" component={MainFlow} />
			<Drawer.Screen name="Subscriptions" component={SubStack} />
		</Drawer.Navigator>
	);
};

export const AppNavigator = () => {
	const [showSplash, setSplashVisibility] = useState(true);
	const isLoggedIn = useSelector(state => !!state.login.accessToken);

	setTimeout(() => {
		setSplashVisibility(false);
	}, 3000);

	if (showSplash) {
		return <Splash />;
	} else {
		return isLoggedIn ? (
			<NavigationContainer>
				<MyDrawer />
			</NavigationContainer>
		) : (
			<LoginScreen />
		);
	}
};
