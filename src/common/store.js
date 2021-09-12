import { applyMiddleware, combineReducers, createStore } from 'redux';
import loginReducer from '../Login/Login.slice';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import searchReducer from '../Search/Search.slice';
import dashboardReducer from '../Dashboard/Dashboard.slice';
import subscriptionReducer from '../Subscriptions/Subscriptions.slice';
import Auth0 from 'react-native-auth0';

const rootReducer = combineReducers({
	login: loginReducer,
	search: searchReducer,
	dashboard: dashboardReducer,
	subscription: subscriptionReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['search'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const auth0 = new Auth0({
	domain: 'dev-ai2btwji.us.auth0.com',
	clientId: 'ITJArBkZkxi8XhI0x0UUm6y5yPUmyKTT',
});

export { store, persistor, auth0 };
