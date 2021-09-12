import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Footer from '../common/Components/Footer.view';
import { FilterPanel } from './FilterPanel.view';
import Expand from '../../assets/Icons/Expand.svg';
import Collapse from '../../assets/Icons/Collapse.svg';
import { SearchResults } from './SearchResults.view';
import Spinner from '../common/Components/Spinner.view';

const SearchView = props => {
	const {
		isLoading,
		isSearchPanelVisible,
		setSearchPanelVisibility,
		eventTypes,
		setEventTypes,
		searchParams,
		setSearchParams,
		searchForEvents,
		searchResults,
	} = props;

	return (
		<View style={{ flex: 1 }}>
			<Spinner visible={isLoading} />
			<View style={{ flex: 1, padding: 10 }}>
				<TouchableOpacity
					onPress={() => setSearchPanelVisibility(!isSearchPanelVisible)}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Text style={{ fontSize: 18, margin: 10 }}>Filter Criteria </Text>
					{isSearchPanelVisible ? <Collapse /> : <Expand />}
				</TouchableOpacity>
				{isSearchPanelVisible && (
					<FilterPanel
						eventTypes={eventTypes}
						setEventTypes={setEventTypes}
						params={searchParams}
						setParams={setSearchParams}
						searchForEvents={searchForEvents}
					/>
				)}
				{searchResults && <SearchResults searchResults={searchResults} />}
			</View>

			<Footer title={'Search'} allowBack />
		</View>
	);
};

export { SearchView };
