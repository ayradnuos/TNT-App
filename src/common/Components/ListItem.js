import React from 'react';
import { Text, View } from 'react-native';
import Ship from '../../../assets/Icons/Ship.svg';
import Container from '../../../assets/Icons/Container.svg';
import Truck from '../../../assets/Icons/Truck.svg';
import RailCar from '../../../assets/Icons/RailCar.svg';
import ExpandedListItem from './ExpandedListItem';

const ListItem = props => {
	const { event = {}, isSelected = false } = props;

	const returnIcon = type => {
		if (type === 'SHIPMENT') return <Ship color="white" />;
		else if (type === 'EQUIPMENT') return <Container color="white" />;
		else if (type === 'TRANSPORT') return <Truck color="white" />;
		else if (type === 'TRANSPORTEQUIPMENT') return <RailCar color="white" />;
		else return <View />;
	};

	return (
		<View style={{ width: '100%', marginVertical: 4 }}>
			<View
				style={{
					backgroundColor: '#dee2e6',
					height: 65,
					width: '100%',
					borderRadius: 12,
					borderWidth: 1,
					padding: 5,
					borderColor: 'grey',
				}}>
				<View
					style={{
						flexDirection: 'column',
						padding: 4,
						alignItems: 'flex-start',
					}}>
					<Text
						style={{
							fontSize: 14,
							fontWeight: 'bold',
						}}>
						{event.eventClassifierCode} - {event.eventTypeCode}
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								fontSize: 20,
								width: '90%',
							}}
							numberOfLines={1}>
							{event.eventDateTime.slice(0, 10) +
								' ' +
								event.eventDateTime.slice(11, 16)}
						</Text>
					</View>
					<View
						style={{
							position: 'absolute',
							right: 10,
							top: 5,
							padding: 10,
							backgroundColor: '#212529',
							borderRadius: 10,
						}}>
						{returnIcon(event.eventType)}
					</View>
				</View>
			</View>
			{isSelected && <ExpandedListItem event={event} />}
		</View>
	);
};

export default ListItem;
