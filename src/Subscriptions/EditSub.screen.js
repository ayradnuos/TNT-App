import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditSubView } from './EditSub.view';
import { subscribeTo, updateSubscription } from './Subscriptions.slice';

const initialSubState = {
	bookingReference: '',
	billOfLadingNumber: '',
	equipmentReference: '',
};

const subReducer = (state, action) => {
	if (action) {
		// const { name, value } = action;
		return { ...state, ...action };
	} else return { ...initialSubState };
};

const EditSubScreen = props => {
	const { route } = props;
	const sub = route?.params?.subscription;
	const [isLoading, setLoading] = useState(false);
	const [eventTypes, setEventTypes] = useState({
		EQUIPMENT: false,
		SHIPMENT: false,
		TRANSPORT: false,
		TRANSPORTEQUIPMENT: false,
	});

	const [subParams, setSubParams] = useReducer(subReducer, initialSubState);

	const dispatch = useDispatch();

	const onFinally = () => {
		setLoading(false);
	};

	useEffect(() => {
		if (sub) {
			Object.keys(initialSubState).forEach(key => {
				if (sub[key]?.length > 0) {
					setSubParams({ [key]: sub[key] });
				}
			});
			const newEventTypes = { ...eventTypes };
			sub.eventType?.forEach(evt => {
				newEventTypes[evt] = true;
			});
			setEventTypes(newEventTypes);
		}
	}, []);

	const subscribeToEvents = () => {
		setLoading(true);
		const eventType = Object.keys(eventTypes).filter(evt => eventTypes[evt]);
		const params = { eventType };
		Object.keys(subParams).forEach(param => {
			const val = subParams[param];
			if (val && val.length > 0) {
				params[param] = val;
			}
		});
		console.log('Sub params', params);
		if (sub) {
			dispatch(subscribeTo(params, onFinally));
		} else {
			dispatch(updateSubscription(sub.subscriptionID, params, onFinally));
		}
	};

	return (
		<EditSubView
			eventTypes={eventTypes}
			setEventTypes={setEventTypes}
			subParams={subParams}
			setSubParams={setSubParams}
			isLoading={isLoading}
			subscribeToEvents={subscribeToEvents}
			isEdit={!!sub}
		/>
	);
};

export default EditSubScreen;
