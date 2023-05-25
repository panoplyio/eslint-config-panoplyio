module.exports = {
    rules: {
        'new-cap': 'error',
        'linebreak-style': ['error', 'unix'],

        // spacing
        'computed-property-spacing': ['error', 'never'],

        'operator-linebreak': ['error', 'before'],

        'no-unused-expressions': ['error', {
            allowTernary: true,
            allowShortCircuit: true,
        }],

        'no-unused-vars': ['error', {
            argsIgnorePattern: '^next$',
        }],

        // negated conditions are more difficult to understand. Code can be
        // made more readable by inverting the condition instead.
        'no-negated-condition': 'error',

        // jsdoc is required but doesn't have to be valid
        // this is in order to enforce some comments on classes and method
        // without requiring a lot of redundant boilerplate
        'require-jsdoc': 'error',

        // semi-colons not required (standardjs.com)
        'semi': ['error', 'never'],

        // allow spacing around semi-colons
        // used for spacing for-loops for readability
        'semi-spacing': 'error',

        // allow inline comments
        'no-inline-comments': 'off',

        // allow TODO and FIXME comments
        'no-warning-comments': 'off',

        // don't require parentheses for single argument arrow functions
        'arrow-parens': 'off',

        // allow usage of `arguments` instead of only rest params (...args)
        'prefer-rest-params': 'off',

        // allow the usage of `apply()` instead of only spread operator
        'prefer-spread': 'off',

        // allow non-radis in parseInt because ECMAScript 5
        // makes it very clear that the default is base 10.
        'radix': 'off',

        // allow, and sometimes even encourage use before definition in order
        // to generate cleaner code where the core functionality is at the top
        // and helpers are at the bottom. Instead of vice-versa.
        'no-use-before-define': 'off',

        // prevent debugger statements in the code
        'no-debugger': 'error',
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        './common',
    ],
}
