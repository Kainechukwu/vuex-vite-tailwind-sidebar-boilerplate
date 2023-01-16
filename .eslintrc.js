// module.exports = {
// 	extends: ["plugin:vue/vue3-essential", "prettier"],
// 	rules: {
// 		// override/add rules settings here, such as:
// 		"vue/no-unused-vars": "error",
// 	},
// }

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
    },
}
