import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const subscriptionSlice = createSlice({
	name: 'subscription',
	initialState: {
		subscriptions: [],
	},
	reducers: {
		saveSubscriptions: (state, action) => {
			state.subscriptions = action.payload;
		},
		clearSubscriptions: state => {
			state.subscriptions = [];
		},
	},
});

export const {
	saveSubscriptions,
	clearSubscriptions,
} = subscriptionSlice.actions;

export const fetchSubscriptions = onFinally => async dispatch => {
	try {
		const subscriptions = await axios.get(
			'https://virtserver.swaggerhub.com/dcsaorg/DCSA_OAS/1.2.0/event-subscriptions',
		);
		console.log('Subscriptions', subscriptions);
		dispatch(saveSubscriptions(subscriptions.data));
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export const subscribeTo = (params, onFinally) => async dispatch => {
	try {
		const newSubscription = await axios.post(
			'https://hackathon.dev.dcsa.org/v2/event-subscriptions',
			{ ...params },
		);
		console.log('SUBBBB', newSubscription);
		// dispatch(fetchSubscriptions());
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export const updateSubscription = (
	subscriptionID,
	params,
	onFinally,
) => async dispatch => {
	try {
		const updatedSubscription = await axios.put(
			'https://hackathon.dev.dcsa.org/v2/event-subscriptions',
			{ ...params },
			{
				params: {
					subscriptionID,
				},
			},
		);
		console.log('SUBBBB', updatedSubscription);
		dispatch(fetchSubscriptions());
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export const deleteSubscription = (
	subscriptionID,
	onFinally,
) => async dispatch => {
	try {
		const deletedSubscription = await axios.delete(
			'https://virtserver.swaggerhub.com/dcsaorg/DCSA_OAS/1.2.0/event-subscriptions/' +
				subscriptionID,
		);
		console.log('SUBBBB', deletedSubscription);
		dispatch(fetchSubscriptions());
	} catch (e) {
		console.log('Error', e);
	}
	onFinally?.();
};

export default subscriptionSlice.reducer;
