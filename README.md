# @pepeeja/eslint-config-react


[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pepeeja/eslint-config-react/blob/main/LICENSE) [![npm latest package](https://img.shields.io/npm/v/@pepeeja/eslint-config-react/latest.svg)](https://www.npmjs.com/package/@pepeeja/eslint-config-react) 

ESLint and Prettier setup for React project

## Install

```shell
// with npm
npm install @pepeeja/eslint-config-react

// with yarn
yarn add @pepeeja/eslint-config-react
```
## Usage

### Prettier

This package contains two configurations one for ESLint and Prettier.

Prettier could be configured by creating `.prettierrc` file in the root directory of your project with the following content:

```json
"@pepeeja/eslint-config-react/prettier"
```

ESLint configuration has several options based on used environment. You can find list of available configurations below.

### ESLint

To apply React specific rules create `.eslintrc` file in the root directory of your project with the following content:

```json
{
  "extends": "@pepeeja/eslint-config-react"
}
```

To setup Typescript integration provide additional configuration in `.eslintrc` file:

```json
"parserOptions": {
  "ecmaVersion": 2022,
  "project": ["tsconfig.json"],
  "sourceType": "module"
}
```

To enable Typescript path aliases provide configuration for import resolver in `.eslintrc` file:

```json
"settings": {
  "import/resolver": {
    "typescript": {
      "project": "tsconfig.json"
    }
  }
}
```

## License

This project is licensed under the terms of the [MIT License](LICENSE)