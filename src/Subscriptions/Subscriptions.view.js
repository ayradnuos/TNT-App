import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Footer from '../common/Components/Footer.view';
import Spinner from '../common/Components/Spinner.view';
import { SwipeableCard } from '../common/Components/SwipeableCard';

const SubscriptionView = props => {
	const { isLoading, subscriptions, unsubscribe, navigation } = props;

	const formattedProps = {
		bookingReference: 'Booking Ref',
		billOfLadingNumber: 'Bill of Lading No.',
		equipmentReference: 'Equipment No.',
	};

	return (
		<View style={{ flex: 1 }}>
			<Spinner visible={isLoading} />
			<View style={{ flex: 1, padding: 15 }}>
				<Text style={{ fontSize: 16 }}>My Subscriptions:</Text>
				{subscriptions.map((sub, i) => (
					<SwipeableCard
						children={
							<View
								key={i}
								style={{
									backgroundColor: '#dee2e6',
									marginVertical: 10,
									padding: 10,
									borderRadius: 10,
									borderWidth: 1,
								}}>
								<View style={{}}>
									{Object.keys(formattedProps).map(prop => {
										const val = sub[prop];
										if (prop?.length > 0)
											return (
												<View
													style={{
														flexDirection: 'row',
														alignItems: 'center',
														justifyContent: 'space-between',
													}}>
													<Text>{formattedProps[prop]}</Text>
													<Text
														style={{
															width: '60%',
															backgroundColor: '#343a40',
															borderRadius: 10,
															color: 'white',
															padding: 10,
															borderWidth: 1,
															margin: 5,
															fontSize: 12,
														}}>
														{sub[prop]}
													</Text>
												</View>
											);
									})}
								</View>
								{/* <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
							{sub.eventType.map(evt => (
								<Text
									style={{
										backgroundColor: '#343a40',
										borderRadius: 10,
										color: 'white',
										padding: 10,
										borderWidth: 1,
										margin: 5,
										fontSize: 12,
									}}>
									{evt}
								</Text>
							))}
						</View> */}
							</View>
						}
						onEdit={() => {
							navigation.navigate('EditSub', { subscription: sub });
						}}
						onDelete={() => unsubscribe(sub.subscriptionID)}
					/>
				))}
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('EditSub');
					}}
					style={{
						position: 'absolute',
						backgroundColor: '#adb5bd',
						height: 50,
						width: 50,
						borderRadius: 25,
						right: 20,
						bottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
						borderWidth: 1,
					}}>
					<Text style={{ fontSize: 30, color: '#212529' }}>+</Text>
				</TouchableOpacity>
			</View>

			<Footer title={'Subscriptions'} />
		</View>
	);
};

export default SubscriptionView;
