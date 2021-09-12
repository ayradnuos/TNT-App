import React from 'react';
import { Text, View } from 'react-native';

const ExpandedListItem = props => {
	const { event = {} } = props;
	const content = JSON.stringify(event);
	const values = Object.values(event);
	console.log('VAL', values);

	return (
		<View
			style={{
				backgroundColor: '#dee2e6',
				width: '100%',
				borderRadius: 12,
				borderColor: 'grey',
				borderWidth: 1,
				marginBottom: 5,
				padding: 8,
			}}>
			{Object.keys(event).map(
				(eve, ind) =>
					ind < 6 && (
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ width: '50%', fontSize: 15 }}>
								{eve.charAt(0).toUpperCase() + eve.slice(1)}{' '}
							</Text>
							<Text style={{ width: '50%', fontSize: 15, color: '#6c757d' }}>
								{values[ind]}
							</Text>
						</View>
					),
			)}
		</View>
	);
};

export default ExpandedListItem;
