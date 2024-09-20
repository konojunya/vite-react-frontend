module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "./node_modules/gts",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "unused-imports",
    "react-refresh",
  ],
  ignorePatterns: [
    "node_modules",
    "build",
    "public",
    ".prettierrc.js",
    "postcss.config.js",
    "tailwind.config.ts",
    "types/*",
  ],
  rules: {
    quotes: ["error", "double"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    eqeqeq: [2, "allow-null"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/text-encoding-identifier-case": "off",
    "unicorn/prefer-export-from": "off",
    "n/no-unsupported-features/node-builtins": "off",
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "node/no-unpublished-import": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
