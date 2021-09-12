import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	Image,
	ImageBackground,
} from 'react-native';
import Spinner from '../common/Components/Spinner.view';

const LoginView = props => {
	const { isLoading } = props;

	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<ImageBackground
				source={require('../../assets/background.jpg')}
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Spinner visible={isLoading} />
				<Image
					style={{
						width: '90%',
						height: '20%',
					}}
					source={require('../../assets/IATA-Logo.png')}
				/>
				<View style={{ marginVertical: 50, alignItems: 'center' }}>
					<Text>Tired of remembering too many credentials?</Text>
					<Text>Use SSO to Login :D</Text>
				</View>
				<TouchableOpacity
					style={{
						width: 150,
						height: 50,
						borderRadius: 50,
						backgroundColor: '#212529',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={() => props.doAuth()}>
					<Text style={{ color: 'white' }}>Try to Login</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LoginView;
