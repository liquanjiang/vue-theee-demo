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
        "array-callback-return": "error",
        "block-spacing":["warn","always"],
        "brace-style": ["warn", "1tbs"],
        "camelcase": ["error", { "properties": "never" }],
        "callback-return": ["off", ["cb", "callback", "next"]],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "consistent-return": "error",
        "curly": ["error", "all"],
        "default-case": "error",
        "dot-notation": ["off", { "allowKeywords": false }],
        "eqeqeq": ["error", "always"],
        "guard-for-in": "error",
        "key-spacing":["error", { "beforeColon": false, "afterColon": true }],
        "lines-around-comment": ["error", {
            "beforeBlockComment": false,
            "afterBlockComment": false,
            "beforeLineComment": false,
            "afterLineComment": false
        }],
        "new-cap": ["error", { "capIsNew": true , "newIsCap": true}],
        "newline-after-var": ["off", "always"],
        "new-parens": "error",
        "no-invalid-this":"off",
        "no-multi-spaces":"error",
        "no-return-assign": ["error", "except-parens"],
        "no-tabs":"off",
        "no-redeclare": "error",
        "no-spaced-func": "error",
        "no-underscore-dangle": "off",
        "no-unused-vars": "off",
        "semi-spacing": ["error", {"before": false, "after": true}],
        "quotes": ["warn","single",{"avoidEscape": true ,"allowTemplateLiterals": true}],
        "space-in-parens": ["warn","never"],
        "space-infix-ops": ["error", {"int32Hint": false}],
        "space-unary-ops": [
            2, {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "new": false,
                    "++": true
                }
            }],
        "spaced-comment": ["error", "always", {
            "line": {
                "markers": ["/"],
                "exceptions": ["-", "+"]
            },
            "block": {
                "markers": ["!"],
                "exceptions": ["*"],
                "balanced": true
            }
        }],
        "yoda": ["error", "never"]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
