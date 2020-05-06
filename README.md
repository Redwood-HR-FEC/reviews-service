# Amazon Review Service for Hack Reactor FEC

Replicates an [Amazon product](https://www.amazon.com/dp/B07NXDPLJ9/ref=smi_www_rco2_go_smi_8217842112) page Review module with dummy date, to be then served via a proxy app along with other team mates modules as a page.


## Related Projects

  - https://github.com/Redwood-HR-FEC/reviews-service
  - https://github.com/Redwood-HR-FEC/product-description-service
  - https://github.com/Redwood-HR-FEC/related-items-service
  - https://github.com/Redwood-HR-FEC/paul-proxy

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Follow the Install guide below firest
> 1. `npm run seed` To populate the database with random data to render the app with.
> 1. `npm run server` Starts the Node server which serves the app on [http://127.0.0.1:3003/006/](http://127.0.0.1:3003/006/).
> 1. `npm run client` Kicks of Webpack with a watcher to transpile, bundle etc.
> 1. `npm run test` Run the tests once
> 1. `npm run test:watch` Run the tests and watch for file chages and re-run.
> 1. `npm run test:cover` Run the tests with the coverage report and pop open the browser UI version.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 +
- NPM 6.13.0 +

## Development

- Tracker https://trello.com/b/tnxnR5Gp/paul
- Tests https://app.circleci.com/pipelines/github/Redwood-HR-FEC/reviews-service

### Installing Dependencies

Will need Mongo DB which you can install [with Brew](https://www.mongodb.com/blog/post/mongodbs-official-brew-tap-now-open-and-flowing) if you don't have it.

From within the root directory:

```sh
npm install -g webpack
npm install
brew services start mongodb-community // Check Mongo DB is running. 

```

