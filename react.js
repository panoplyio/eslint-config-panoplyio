module.exports = {
    extends: [
        './common',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'react',
        'react-hooks',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-curly-spacing': ['error', {
            when: 'never',
            children: { when: 'never' },
        }],
        'react/jsx-curly-newline': ['error', {
            multiline: 'consistent',
            singleline: 'consistent',
        }],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'allow',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-filename-extension': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'error',
        'react/prop-types': 'error',
        'react/display-name': 'off', // we use babel to generate display names

        'react-hooks/exhaustive-deps': 'error',
    },
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
}
