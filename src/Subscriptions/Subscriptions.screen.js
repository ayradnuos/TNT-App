import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubscription, fetchSubscriptions } from './Subscriptions.slice';
import SubscriptionView from './Subscriptions.view';

const SubscriptionScreen = props => {
	const { navigation } = props;
	const [isLoading, setLoading] = useState(false);
	const subscriptions = useSelector(state => state.subscription.subscriptions);
	console.log(subscriptions.length);
	const dispatch = useDispatch();

	const onFinally = () => {
		setLoading(false);
	};

	const unsubscribe = id => {
		console.log('Unsubscribing');
		setLoading(true);
		dispatch(deleteSubscription(id, onFinally));
	};

	useEffect(() => {
		dispatch(fetchSubscriptions(onFinally));
	}, []);

	return (
		<SubscriptionView
			isLoading={isLoading}
			subscriptions={subscriptions}
			unsubscribe={unsubscribe}
			navigation={navigation}
		/>
	);
};

export default SubscriptionScreen;
