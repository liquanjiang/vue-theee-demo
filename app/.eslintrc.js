module.exports = {
    root: true,
    env: {
        node: true,
        jquery: true,
        browser: true,
        es6: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [1, 4, { 'SwitchCase': 1 }],
        'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always' }],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
