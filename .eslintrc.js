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
        'prettier',
        "unused-imports"
    ],
    "settings": {
        react: {
            version: "detect"
        }
    },
    "rules": {
        'semi': ['error', 'always'],
        'quotes': ["error", "single"],
        // "react/jsx-filename-extension": ["warn", { "extensions": [".tsx",] }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        // 'sort-imports': [
        //     'error',
        //     {
        //       ignoreCase: false,
        //       ignoreDeclarationSort: true, // don"t want to sort import lines, use eslint-plugin-import instead
        //       ignoreMemberSort: false,
        //       memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        //       allowSeparatedGroups: true,
        //     },
        //   ],
        // "@typescript-eslint/no-unused-vars": "off",
        // "unused-imports/no-unused-imports": "error",
        // "unused-imports/no-unused-vars": [
        //     "error",
        //     { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        // ]
    }
}
