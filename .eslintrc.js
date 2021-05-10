module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser,
  plugins: [
    "jest",
    "@typescript-eslint",
    "typescript-sort-keys",
    "simple-import-sort",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "sort-keys": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "jest/no-focused-tests": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],

          // React imports.
          // Anything that starts with 'react' or 'redux'.
          ["^react", "^redux"],

          // Absolute imports.
          // Non-repository root relative imports that do not start with a dot.
          ["^(?!i18n(?!-js)|js|images|\\.)"],

          // Repository root relative imports.
          ["^(i18n(?!-js)|js|images)"],

          // File relative imports.
          // Anything that starts with a dot.
          ["^\\."],
        ],
      },
    ],
    "sort-imports": "off",
    "import/order": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
