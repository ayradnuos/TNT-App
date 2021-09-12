import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		results: null,
	},
	reducers: {
		saveResults: (state, action) => {
			state.results = action.payload;
		},
	},
});

export const { saveResults } = dashboardSlice.actions;

export const events = onFinally => async dispatch => {
	try {
		const response = await axios.get(
			'https://hackathon.dev.dcsa.org/v2/events',
		);
		console.log('RESPONSE', response.request);
		dispatch(saveResults(response.data));
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export default dashboardSlice.reducer;
