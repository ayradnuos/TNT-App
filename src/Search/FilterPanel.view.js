import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Confirm from '../../assets/Icons/Confirm.svg';

const FilterPanel = props => {
	const {
		eventTypes,
		setEventTypes,
		params,
		setParams,
		searchForEvents,
		subscribeToEvents,
	} = props;

	const formattedEventTypes = {
		EQUIPMENT: 'Equipment',
		SHIPMENT: 'Shipment',
		TRANSPORT: 'Transport',
		TRANSPORTEQUIPMENT: 'Transport Eq.',
	};

	return (
		<View>
			<View style={{ margin: 10 }}>
				<Text>Event Types:</Text>
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					{Object.keys(eventTypes).map(evtType => (
						<TouchableOpacity
							onPress={() => {
								setEventTypes({
									...eventTypes,
									[evtType]: !eventTypes[evtType],
								});
							}}
							style={{
								height: 40,
								width: '40%',
								padding: 10,
								margin: 5,
								justifyContent: 'center',
								alignItems: 'center',
								borderColor: '#adb5bd',
								borderWidth: 1,
								borderRadius: 10,
								backgroundColor: eventTypes[evtType] ? '#343a40' : '#dee2e6',
							}}>
							{eventTypes[evtType] && (
								<View
									style={{
										position: 'absolute',
										left: 10,
									}}>
									<Confirm color="white" width={16} height={16} />
								</View>
							)}
							<Text
								style={{
									fontSize: 14,
									color: eventTypes[evtType] ? 'white' : 'black',
								}}>
								{formattedEventTypes[evtType]}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<View
				style={{
					margin: 10,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}>
				<Text>Bill of Lading Number:</Text>
				<TextInput
					value={params.billOfLadingNumber}
					onChangeText={text => {
						setParams({ billOfLadingNumber: text });
					}}
					style={{
						borderBottomWidth: 1,
						height: 40,
						width: '50%',
					}}
				/>
			</View>
			<View
				style={{
					margin: 10,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}>
				<Text>Booking reference:</Text>
				<TextInput
					value={params.bookingReference}
					onChangeText={text => {
						setParams({ bookingReference: text });
					}}
					style={{
						borderBottomWidth: 1,
						height: 40,
						width: '50%',
					}}
				/>
			</View>
			<View
				style={{
					margin: 10,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}>
				<Text>Equipment reference:</Text>
				<TextInput
					value={params.equipmentReference}
					onChangeText={text => {
						setParams({ equipmentReference: text });
					}}
					style={{
						borderBottomWidth: 1,
						height: 40,
						width: '50%',
					}}
				/>
			</View>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 20,
					justifyContent: 'center',
				}}>
				{searchForEvents && (
					<TouchableOpacity
						onPress={searchForEvents}
						style={{
							width: '45%',
							padding: 10,
							margin: 10,
							backgroundColor: '#212529',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 10,
						}}>
						<Text style={{ color: 'white' }}>Search</Text>
					</TouchableOpacity>
				)}
				{subscribeToEvents && (
					<TouchableOpacity
						onPress={subscribeToEvents}
						style={{
							padding: 10,
							width: '45%',
							margin: 10,
							backgroundColor: '#212529',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 10,
						}}>
						<Text style={{ color: 'white' }}>Subscribe</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export { FilterPanel };
