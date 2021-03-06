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

Follow the Install guide below first
> 1. `npm run seed` Populate the database with random data needed to render the service.
> 1. `npm run server` Starts the Node server which serves the service on [http://127.0.0.1:3003/006/](http://127.0.0.1:3003/006/).
> 1. `npm start` Kicks of Webpack with a watcher to transpile, bundle etc.
> 1. `npm run build` Runs Webpack in Production mode.
> 1. `npm run test` Runs the tests once
> 1. `npm run test:watch` Runs the tests and watch for file chages and re-run.
> 1. `npm run test:cover` Runs the tests with the coverage report and pop it open the browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 +
- NPM 6.13.0 +

## Development

- Tracker https://trello.com/b/tnxnR5Gp/paul
- Tests https://app.circleci.com/pipelines/github/Redwood-HR-FEC/reviews-service

### Installing Dependencies

Requires Mongo DB which you can install [with Brew](https://www.mongodb.com/blog/post/mongodbs-official-brew-tap-now-open-and-flowing) if you don't have it.

From within the root directory:

```sh
npm install -g webpack
npm install
brew services start mongodb-community // Check Mongo DB is running. 

```

