module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
	],
	rules: {
		'indent': [2, 'tab'],
		'semi': [2, 'always'],
		'object-curly-newline': 0,
		'key-spacing': [2, { "beforeColon": false, "afterColon": true }]
	},
};
