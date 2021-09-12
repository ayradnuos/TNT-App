import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		accessToken: null,
	},
	reducers: {
		saveAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		clearAccessToken: state => {
			state.accessToken = null;
		},
	},
});

export const { saveAccessToken, clearAccessToken } = loginSlice.actions;

export default loginSlice.reducer;
