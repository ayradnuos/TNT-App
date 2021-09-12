import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
	clearSearchResults,
	searchForEvents as searchForEventsAction,
} from './Search.slice';
import { SearchView } from './Search.view';

const initialSearchState = {
	bookingReference: '',
	billOfLadingNumber: '',
	equipmentReference: '',
};

const searchReducer = (state, action) => {
	if (action) {
		// const { name, value } = action;
		return { ...state, ...action };
	} else return { ...initialSearchState };
};

const SearchScreen = props => {
	const {} = props;
	const searchResults = useSelector(state => state.search.searchResults);
	const dispatch = useDispatch();

	const [isLoading, setLoading] = useState(false);
	const [isSearchPanelVisible, setSearchPanelVisibility] = useState(true);
	const [eventTypes, setEventTypes] = useState({
		EQUIPMENT: false,
		SHIPMENT: false,
		TRANSPORT: false,
		TRANSPORTEQUIPMENT: false,
	});

	const [searchParams, setSearchParams] = useReducer(
		searchReducer,
		initialSearchState,
	);

	useEffect(() => {
		console.log('Use effect');
		dispatch(clearSearchResults());
		setSearchPanelVisibility(true);
	}, []);

	useEffect(() => {
		console.log('HERE.!!', searchResults?.length);
		if (searchResults?.length > 0) {
			console.log('HERE?', searchResults.length);
			setSearchPanelVisibility(false);
		}
	}, [searchResults]);

	const searchForEvents = () => {
		setLoading(true);
		//TODO
		const eventType = Object.keys(eventTypes).filter(evt => eventTypes[evt]);
		const params = {};
		Object.keys(searchParams).forEach(param => {
			const val = searchParams[param];
			if (val && val.length > 0) {
				params[param] = val;
			}
		});
		const onFinally = () => {
			setLoading(false);
		};
		console.log('Searching for', params);
		dispatch(searchForEventsAction(params, onFinally));
	};

	return (
		<SearchView
			isSearchPanelVisible={isSearchPanelVisible}
			setSearchPanelVisibility={setSearchPanelVisibility}
			eventTypes={eventTypes}
			setEventTypes={setEventTypes}
			searchParams={searchParams}
			setSearchParams={setSearchParams}
			searchForEvents={searchForEvents}
			searchResults={searchResults}
			isLoading={isLoading}
		/>
	);
};

export default SearchScreen;
