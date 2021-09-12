import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { events } from './Dashboard.slice';
import DashboardView from './Dashboard.view';

const DashboardScreen = props => {
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const results = useSelector(state => state.dashboard.results);
	const [selectedKey, setSelectedKey] = useState(-1);

	useEffect(() => {
		const onFinally = () => {
			setLoading(false);
		};
		dispatch(events(onFinally));
	}, []);

	useEffect(() => setSelectedKey(-1), []);

	const updateSelectedKey = value => {
		if (value === selectedKey) setSelectedKey(-1);
		else setSelectedKey(value);
	};

	return (
		<DashboardView
			isLoading={isLoading}
			results={results}
			selectedKey={selectedKey}
			updateSelectedKey={updateSelectedKey}
		/>
	);
};

export default DashboardScreen;
