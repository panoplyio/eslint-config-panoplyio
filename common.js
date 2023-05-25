// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        'eslint:recommended',
    ],
    plugins: [
        'filenames',
    ],
    rules: {
        // Possible Errors
        'no-console': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-prototype-builtins': 'error',
        'require-atomic-updates': 'error',

        // Best Practices
        'filenames/match-regex': ['error', '^[a-z0-9-.]+$'],
        'complexity': ['error', 12],
        'consistent-return': 'error',
        'dot-location': ['error', 'property'],
        'eqeqeq': ['error', 'always', { null: 'ignore' }],
        'no-extra-bind': 'error',
        'no-invalid-this': 'error',
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-return-await': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-catch': 'error',
        'prefer-promise-reject-errors': 'error',

        // Stylistic Issues
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
        }],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': ['error', 4, {
            SwitchCase: 1,
            ignoredNodes: ['TemplateLiteral *'],
        }],
        'curly': ['error', 'all'],
        'key-spacing': ['error', { afterColon: true, mode: 'strict' }],
        'keyword-spacing': ['error', { before: true }],
        'max-len': ['error', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
        }],
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'quotes': ['error', 'single', 'avoid-escape'],
        'jsx-quotes': ['error', 'prefer-double'],
        'quote-props': ['error', 'consistent-as-needed'],
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        'multiline-comment-style': ['error', 'separate-lines'],
        'no-var': 'error',
        'prefer-const': 'error',
        'padded-blocks': 'off',
        'prefer-template': 'off',
        'class-methods-use-this': 'error',
        'no-confusing-arrow': ['error', { allowParens: true }],
        'no-underscore-dangle': 'off',
        'semi': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],
        'template-curly-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'consistent'],
        'function-call-argument-newline': ['error', 'consistent'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
        }],
        'space-before-blocks': ['error', 'always'],
        'space-infix-ops': 'error',
        'space-in-parens': ['error', 'never'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'prefer-arrow-callback': 'error',
    },
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
}