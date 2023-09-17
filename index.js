module.exports = {
  parser: "@typescript-eslint/parser",
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ['react-refresh'],
  rules: {
    // Enforce a convention in the order of import statements
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          [
            "builtin",
            "external"
          ],
          [
            "parent",
            "sibling",
            "index"
          ]
        ]
      }
    ],
    // This rule reports any imports that come after non-import statements
    "import/first": [
      "error"
    ],
    // Enforces having one empty line after the last top-level import statement
    "import/newline-after-import": [
      "error",
      {
        "count": 1
      }
    ],
    // Require explicit return types on functions and class methods.
    "@typescript-eslint/explicit-function-return-type": "off",
    // Require explicit accessibility modifiers on class properties and methods
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    // Require a specific member delimiter style for interfaces and type literals.
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multilineDetection": "last-member"
      }
    ],
    // Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    // Disallow conditionals where the type is always truthy or always falsy
    "@typescript-eslint/no-unnecessary-condition": "warn",
    // Require private members to be marked as readonly if they're never modified outside of the constructor
    "@typescript-eslint/prefer-readonly": "warn",
    // Disallow TypeScript namespaces
    "@typescript-eslint/no-namespace": [
      "warn",
      {
        "allowDeclarations": true
        
      }
    ],
    // Enforce consistent line breaks after opening and before closing braces
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    // Enforce camelcase naming convention
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    // Enforce consistent brace style for all control statements
    "curly": "error",
    // Require default cases in switch statements
    "default-case": "error",
    // Enforce default clauses in switch statements to be last
    "default-case-last": "error",
    // Enforce a maximum number of classes per file
    "max-classes-per-file": [
      "error",
      1
    ],
    // Disallow else blocks after return statements in if statements
    "no-else-return": "error",
    // Disallow unnecessary return await
    "no-return-await": "error",
    // Disallow shorthand type conversion
    "no-implicit-coercion": "error",
    "semi": ["error", "never"]
  }
};
