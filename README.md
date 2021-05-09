# @xtech/eslint-config

xTECH's [ESLint](https://eslint.org) config.

The package contains different configurations for different project types. Each configuration has its own dependencies that must be installed for the configuration to work properly. The dependencies of every configuration are described in the corresponding section below.

# Installation

To install the main package:

```bash
$ npm i -D @xtech/eslint-config
```

Check the sections below for the installation of the dependecies for every configuration.

## Pure TS configuration

### Dependencies

Required dependencies:

- `eslint` >= 7.0.0
- `eslint-config-prettier` >= 6.0.0 and < 8.0.0
- `eslint-plugin-import`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

To install all dependencies:

```bash
$ npm i -D eslint eslint-config-prettier@^7.0.0 eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Usage

Extend your ESLint config from `"@xtech"`, e.g.

```json
{
  "root": true,
  "extends": ["@xtech"]
}
```

## React TS configuration

### Dependencies

Required dependencies:

- `eslint` >= 7.0.0
- `eslint-config-prettier` >= 6.0.0 and < 8.0.0
- `eslint-config-react-app`
- `eslint-plugin-jest`
- `eslint-plugin-testing-library`

To install all dependencies:

```bash
$ npm i -D eslint eslint-config-prettier@^7.0.0 eslint-config-react-app eslint-plugin-jest eslint-plugin-testing-library
```

### Usage

Extend your ESLint config from `"@xtech/eslint-config/react"`, e.g.

```json
{
  "root": true,
  "extends": ["@xtech/eslint-config/react"]
}
```
