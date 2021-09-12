import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ListItem from '../common/Components/ListItem';

const SearchResults = props => {
	const { searchResults } = props;

	return (
		<View style={{ flex: 1 }}>
			<Text style={{ fontSize: 16, marginVertical: 10 }}>Search Results:</Text>
			{searchResults.length > 0 ? (
				<ScrollView>
					{searchResults.map((result, i) => (
						<ListItem event={result} key={i} />
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
