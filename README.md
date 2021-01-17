# NodeJS + Express + TypeScript + Webpack + Docker Template

---

## About

This template aims to provide an easy to implement boilerplate for creating NodeJS based APIs using NodeJS, Express, Typescript, Webpack and Docker. The template uses .handler.ts files as the starting points for new routes as well as handlerName.test.ts colocated to the same directory. Here is a good read about colocation https://kentcdodds.com/blog/colocation enjoy.

- Formating and linting with prettier-standard
- Tests with Jest and supertest

## Getting Started

`yarn install` - Install all the dependencies.
`yarn dev` - Run a local API environment for **development**.
`yarn generate <handlerName>` - Will run an utility tool for creating handlers with unit tests in the same directory.
`yarn test` - Will run all tests with the --silent enabled and --detectOpenHandles so you don't get a huge blob of console.logs.

## With Docker

`yarn dev:docker` - Creates and runs an isolated environment in a docker container for **development** (recommended).

### Building for production

`yarn build:docker` - This command will transpile and create a distribution folder in a docker image.
