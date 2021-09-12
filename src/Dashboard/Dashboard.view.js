import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../common/Components/Footer.view';
import ListItem from '../common/Components/ListItem';
import Spinner from '../common/Components/Spinner.view';

const DashboardView = props => {
	const { isLoading, results, selectedKey, updateSelectedKey } = props;
	return (
		<View style={{ flex: 1 }}>
			<Spinner visible={isLoading} />
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					margin: 5,
				}}>
				<ScrollView style={{ width: '100%' }}>
					{results.map((ele, ind) => (
						<TouchableOpacity
							key={ind}
							onPress={() => {
								updateSelectedKey(ind);
							}}>
							<ListItem event={ele} isSelected={ind === selectedKey} />
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
			<Footer title={'My Events'} allowSearch />
		</View>
	);
};

export default DashboardView;
