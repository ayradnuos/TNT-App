module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier', 'prettier/react'],
	parser: 'babel-eslint',
	plugins: ['prettier', 'react-native'],
	rules: {
		'react-native/no-inline-styles': 'off',
	},
};
