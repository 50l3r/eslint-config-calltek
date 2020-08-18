module.exports = {
	extends: [
		'plugin:vue/recommended'
	],
	rules: {
		'vue/name-property-casing': [2, 'PascalCase'],
		'vue/prop-name-casing': [2, 'camelCase'],
		'vue/max-attributes-per-line': 0,
		'vue/require-default-prop': 0,
		'vue/component-name-in-template-casing': [2, 'kebab-case', { registeredComponentsOnly: false }],
		'vue/html-indent': [2, 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: [],
		}]
	}
};
