import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchResults: null,
	},
	reducers: {
		saveSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
		clearSearchResults: state => {
			state.searchResults = null;
		},
	},
});

export const { saveSearchResults, clearSearchResults } = searchSlice.actions;

export const searchForEvents = (searchParams, onFinally) => async dispatch => {
	try {
		const response = await axios.get(
			'https://hackathon.dev.dcsa.org/v2/events',
			{
				data: { ...searchParams },
				params: { ...searchParams },
			},
		);
		dispatch(saveSearchResults(response.data));
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export default searchSlice.reducer;
