# TypeScript Unit Test Template

A minimal template for setting up a TypeScript project with unit tests with [ts-jest](https://kulshekhar.github.io/ts-jest/).

## Setup Steps

Run to install the required packages.

```bash
npm install --save-dev jest typescript ts-jest @types/jest
```

Run to intialize `ts-jest`.

```bash
npx ts-jest config:init
```````

Add the following to the `package.json`

```json
"scripts": {
    "test": "jest"
}
```

Create `tsconfig.json` file with the following configuration.

```json
{
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true
    }
}
```
