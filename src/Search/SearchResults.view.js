import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ListItem from '../common/Components/ListItem';

const SearchResults = props => {
	const { searchResults, selectedKey, updateSelectedKey } = props;

	return (
		<View style={{ flex: 1 }}>
			<Text style={{ fontSize: 16, marginVertical: 10 }}>Search Results:</Text>
			{searchResults.length > 0 ? (
				<ScrollView>
					{searchResults.map((result, ind) => (
						<TouchableOpacity
							key={ind}
							onPress={() => {
								updateSelectedKey(ind);
							}}>
							<ListItem event={result} isSelected={ind === selectedKey} />
						</TouchableOpacity>
					))}
				</ScrollView>
			) : (
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text> No events found! Search again.</Text>
				</View>
			)}
		</View>
	);
};

export { SearchResults };
