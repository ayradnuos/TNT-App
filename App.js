import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/common/store';
import { AppNavigator } from './src/Navigation/AppNavigator';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		flex: 1,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar backgroundColor="#212529" barStyle={'light-content'} />
			<AppNavigator />
		</SafeAreaView>
	);
};

const Root = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

export default Root;
