module.exports = {
	extends: ['plugin:vue/recommended'],
	rules: {
		'no-param-reassign': 0, // VUEX
		'no-shadow': 0, // VUEX
		'vue/name-property-casing': [2, 'PascalCase'],
		'vue/prop-name-casing': [2, 'camelCase'],
		// 'vue/max-attributes-per-line': 0,
		'vue/require-default-prop': 0,
		'vue/component-name-in-template-casing': [2, 'kebab-case', { registeredComponentsOnly: false }],
		'vue/html-indent': [
			2,
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'import/extensions': [
			2,
			{
				js: 'never',
				vue: 'never'
			}
		]
	}
};
