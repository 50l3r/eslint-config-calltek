module.exports = {
    extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
    ],
    rules: {
		'no-console': [process.env.NODE_ENV === 'production' ? 2 : 0, {allow: ["warn", "error"] }],
		'indent': [2, "tab"],
		'object-curly-newline': 0,
		'key-spacing': [2, {"beforeColon": true, "afterColon": true }],
		///////////////////////
		// VUE
		///////////////////////
		'vue/name-property-casing': [2, 'PascalCase'],
		'vue/prop-name-casing': [2, 'camelCase'],
		'vue/max-attributes-per-line': 0,
		'vue/require-default-prop': 0,
		'vue/component-name-in-template-casing': [2, 'kebab-case', {registeredComponentsOnly: false}],
		'vue/html-indent': [2, 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: [],
		}]
    }
};