module.exports = {
    globals: {
        Panoply: true,
        describe: true,
        it: true,
        before: true,
        beforeEach: true,
        after: true,
        afterEach: true,
        Polymer: false,
        moment: false
    },
    plugins: [
        'html'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'new-cap': [ 2, {
            capIsNewExceptions: [ 'Polymer', 'Router' ]
        }],
        'linebreak-style': [ 2, 'unix' ],
        'indent': 'off',
        'indent-legacy': [2, 4],
        'quotes': [ 2, 'single', 'avoid-escape' ],

        // spacing
        'space-in-parens': [ 0, 'always' ],
        'computed-property-spacing': [ 0, 'always' ],
        'space-before-function-paren': [ 0, 'always' ],
        'array-bracket-spacing': [ 0, 'always' ],
        'object-curly-spacing': [ 0, 'always' ],

        'operator-linebreak': [ 2, 'before' ],

        // this used to be [2, 5], but when updating to ESLint 5,
        // complexity measurement got better and so the existing codebase
        // failed to lint
        'complexity': [ 2, 12 ],

        'no-unused-expressions': [ 2, {
            'allowTernary': true,
            'allowShortCircuit': true
        } ],

        'no-unused-vars': [ 2, {
            'argsIgnorePattern': '^next$'
        }],

        // negated conditions are more difficult to understand. Code can be
        // made more readable by inverting the condition instead.
        'no-negated-condition': [ 2 ],

        'no-multi-spaces': ["error", {
            "ignoreEOLComments": true,

        }],

        'max-len': [ 2, 80, 4, {
            ignoreUrls: true
        }],

        // disallow weak equal signs (= instead of ==)
        'eqeqeq': [ 2 ],

        // jsdoc is required but doesn't have to be valid
        // this is in order to enforce some comments on classes and method
        // without requiring a lot of redundant boilerplate
        'require-jsdoc': [ 2 ],
        'valid-jsdoc': [ 0 ],

        // semi-colons not required (standardjs.com)
        'semi': [ 0 ],

        // we don't care about IE8, trailing commas are valid in ES5
        'comma-dangle': [ 0 ],

        // allow spacing around semi-colons
        // used for spacing for-loops for readability
        'semi-spacing': [ 0 ],

        // allow multiple empty lines for spacious code
        'no-multiple-empty-lines': [ 0 ],

        // allow inline comments
        'no-inline-comments': [ 0 ],

        // allow padded blocks where it makes sense
        'padded-blocks': [ 0 ],

        // allow TODO and FIXME comments
        'no-warning-comments' : [ 0 ],

        // allow usage of the `var` keyword
        'no-var': [ 0 ],

        // don't require parentheses for single argument arrow functions
        'arrow-parens': [ 0 ],

        // allow usage of `arguments` instead of only rest params (...args)
        'prefer-rest-params': [ 0 ],

        // allow the usage of `apply()` instead of only spread operator
        'prefer-spread': [ 0 ],

        // allow usage of `this` keyword outside of classes/class-like objects.
        'no-invalid-this': [ 0 ],

        // allow non-radis in parseInt because ECMAScript 5
        // makes it very clear that the default is base 10.
        'radix': [ 0 ],

        // allow, and sometimes even encourage use before definition in order
        // to generate cleaner code where the core functionality is at the top
        // and helpers are at the bottom. Instead of vice-versa.
        'no-use-before-define': [ 0 ],
        // prevent debugger statements in the code
        'no-debugger': [ 2 ],

        'prefer-const': [0],

        'prefer-promise-reject-errors': [0]
    },
    env: {
        'node': true,
        'browser': true,
        'es6': true
    },
    extends: 'google'
}

