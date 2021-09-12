import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Search from '../../../assets/Icons/Search.svg';
import Back from '../../../assets/Icons/Back.svg';

const Footer = props => {
	const { title, allowSearch, allowBack } = props;
	const navigation = useNavigation();

	return (
		<View
			style={{
				height: 70,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#212529',
				borderTopWidth: 1,
			}}>
			{allowBack && (
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{ position: 'absolute', left: 5, padding: 15 }}>
					<Back color={'white'} width={24} height={24} />
				</TouchableOpacity>
			)}
			<Text style={{ fontSize: 18, color: 'white' }}>{title}</Text>
			{allowSearch && (
				<TouchableOpacity
					onPress={() => navigation.navigate('Search')}
					style={{ position: 'absolute', right: 5, padding: 15 }}>
					<Search color={'white'} width={24} height={24} />
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Footer;
