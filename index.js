module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	"extends": ["airbnb"],
	rules: {
		'no-console': [1, { "allow": ["warn", "error"] }],
		'indent': [1, 'tab'],
		'semi': [1, 'always'],
		'object-curly-newline': 0,
		'key-spacing': [2, { "beforeColon": false, "afterColon": true }]
	},
};
