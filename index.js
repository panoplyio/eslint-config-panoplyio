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
        moment: false,
    },
    plugins: [
        'html',
        'filenames',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        // Possible Errors
        'no-console': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'off',
        'no-prototype-builtins': 'off',
        'require-atomic-updates': 'error',

        // Best Practices
        'consistent-return': 'error',
        'dot-location': ['error', 'property'],
        'no-extra-bind': 'error',
        'no-param-reassign': 'error',
        'no-return-await': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-catch': 'error',

        // Stylistic Issues
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'curly': ['error', 'all'],
        'key-spacing': ['error', { afterColon: true, mode: 'strict' }],
        'keyword-spacing': ['error', { before: true }],
        'no-multi-assign': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'quote-props': ['error', 'consistent-as-needed'],
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        'multiline-comment-style': ['error', 'separate-lines'],
        'prefer-template': 'off',
        'class-methods-use-this': 'off',
        'import/no-named-as-default': 'off',
        'no-confusing-arrow': ['error', { allowParens: true }],
        'no-underscore-dangle': 'off',
        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],
        'template-curly-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'consistent'],
        'function-call-argument-newline': ['error', 'consistent'],
        'space-before-blocks': ['error', 'always'],
        'space-infix-ops': 'error',
        'arrow-spacing': ['error', { before: true, after: true }],

        // other
        'new-cap': ['error', {
            capIsNewExceptions: ['Polymer', 'Router'],
        }],
        'linebreak-style': ['error', 'unix'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'quotes': ['error', 'single', 'avoid-escape'],

        // spacing
        'space-in-parens': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
        }],
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],

        'operator-linebreak': ['error', 'before'],

        // this used to be ['error', 5], but when updating to ESLint 5,
        // complexity measurement got better and so the existing codebase
        // failed to lint
        'complexity': ['error', 12],

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

        'no-multi-spaces': ['error', {
            ignoreEOLComments: true,
        }],

        'max-len': ['error', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
        }],

        // disallow weak equal signs (= instead of ==)
        'eqeqeq': ['error', 'always', { null: 'ignore' }],

        // jsdoc is required but doesn't have to be valid
        // this is in order to enforce some comments on classes and method
        // without requiring a lot of redundant boilerplate
        'require-jsdoc': 'error',
        'valid-jsdoc': 'off',

        // semi-colons not required (standardjs.com)
        'semi': ['error', 'never'],

        // trailing commas are required
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // allow spacing around semi-colons
        // used for spacing for-loops for readability
        'semi-spacing': 'off',

        // allow multiple empty lines for spacious code
        'no-multiple-empty-lines': ['error', { max: 2 }],

        // allow inline comments
        'no-inline-comments': 'off',

        // allow padded blocks where it makes sense
        'padded-blocks': 'off',

        // allow TODO and FIXME comments
        'no-warning-comments': 'off',

        // allow usage of the `var` keyword
        'no-var': 'off',

        // don't require parentheses for single argument arrow functions
        'arrow-parens': 'off',

        // allow usage of `arguments` instead of only rest params (...args)
        'prefer-rest-params': 'off',

        // allow the usage of `apply()` instead of only spread operator
        'prefer-spread': 'off',

        // allow usage of `this` keyword outside of classes/class-like objects.
        'no-invalid-this': 'off',

        // allow non-radis in parseInt because ECMAScript 5
        // makes it very clear that the default is base 10.
        'radix': 'off',

        // allow, and sometimes even encourage use before definition in order
        // to generate cleaner code where the core functionality is at the top
        // and helpers are at the bottom. Instead of vice-versa.
        'no-use-before-define': 'off',
        // prevent debugger statements in the code
        'no-debugger': 'error',

        'prefer-const': 'off',

        'prefer-promise-reject-errors': 'off',

        'filenames/match-regex': ['error', '^[a-z0-9-.]+$'],
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
    ],
}
