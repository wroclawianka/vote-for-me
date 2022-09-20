module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended',
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'prettier'
    ],
    "settings": {
        react: {
            version: "detect"
        }
    },
    "rules": {
        'semi': ['error', 'always'],
        'quotes': ["warn", "single"],
        "react/jsx-filename-extension": ["warn", { "extensions": [".tsx",] }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
    }
}
