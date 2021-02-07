/* eslint-disable indent */
/* eslint-disable linebreak-style */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        'no-plusplus': ['error', {
            allowForLoopAfterthoughts: true,
        }],
        'no-param-reassign': ['error', {
            props: false,
        }],
        indent: ['error', 4],
    },
};