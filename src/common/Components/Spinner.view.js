import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

/**
 * Spinner
 * @returns A component that displays an activity spinner on top of an overlay which prevents clicks  on the screen.
 */
const Spinner = ({ overlayColor, visible }) => (
	<Modal transparent visible={visible}>
		<View style={{ ...spinnerStyles.container, backgroundColor: overlayColor }}>
			<ActivityIndicator size={60} color="black" />
		</View>
	</Modal>
);

Spinner.defaultProps = {
	overlayColor: 'rgba(0, 0, 0, 0.25)',
	visible: false,
};

const spinnerStyles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Spinner;
