module.exports = {
	parser: 'babel-eslint',
	env: {
		node: true,
		es6: true
	},
	extends: ['airbnb-base'],
	rules: {
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-tabs': 0,
		'comma-dangle': [1, 'never'],
		'object-curly-newline': 0,
		'key-spacing': [2, { beforeColon: false, afterColon: true }],
		'no-underscore-dangle': 0,
		'prefer-destructuring': 0,
		'func-names': 0,
		'import/extensions': [
			2,
			{
				js: 'never'
			}
		],
		indent: [1, 'tab', { SwitchCase: 1 }],
		semi: [1, 'always']
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.js']
			}
		}
	}
};
