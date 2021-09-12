import React, { useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import Footer from '../common/Components/Footer.view';
import Spinner from '../common/Components/Spinner.view';
import { FilterPanel } from '../Search/FilterPanel.view';

const EditSubView = props => {
	const {
		eventTypes,
		setEventTypes,
		subParams,
		setSubParams,
		isLoading,
		subscribeToEvents,
		isEdit,
	} = props;

	return (
		<View style={{ flex: 1 }}>
			<Spinner visible={isLoading} />
			<View style={{ flex: 1, margin: 20 }}>
				<Text style={{ fontSize: 16 }}>Filters:</Text>
				<FilterPanel
					eventTypes={eventTypes}
					setEventTypes={setEventTypes}
					params={subParams}
					setParams={setSubParams}
					subscribeToEvents={subscribeToEvents}
				/>
			</View>
			<Footer
				title={isEdit ? 'Edit Subscription' : 'Add Subscription'}
				allowBack
			/>
		</View>
	);
};

export { EditSubView };
