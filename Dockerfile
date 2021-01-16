# Light node image with yarn installed
FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 8080

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --quiet
COPY . ./
RUN yarn build

RUN rm -rf src webpack.config*

CMD ["node", "dist/index.js"]
