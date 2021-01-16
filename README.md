# NodeJS + Express + TypeScript + Webpack + Docker Template

---

## About

This template aims to provide an easy to implement boilerplate for creating NodeJS based APIs using NodeJS, Express, Typescript, Webpack and Docker.

## Getting Started

`yarn install` - Install all the dependencies.
`yarn dev` - Run a local API environment for **development**.

Create a route file .ts under routes and webpack will import every route within that folder so you don't have to worry about importing routes.

## With Docker

`yarn dev:docker` - Creates and runs an isolated environment in a docker container for **development** (recommended).

### Building for production

`yarn build:docker` - This command will transpile and create a distribution folder in a docker image.
