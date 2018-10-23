# Random Distrib Website

[![Build Status](https://travis-ci.org/AndreasAbdi/randomDistrib.svg?branch=master)](https://travis-ci.org/AndreasAbdi/randomDistrib)

Frontend coin flipping website based on typescript, and angular.

Generate random selection based on some distribution of events.

## Prerequisites

Requires npm and nodeJs.

## Installation

### standard build

go to shell and run the following commands.

```bash
   npm install
   npm start
```

The server will be up at `localhost:4200`.
To shut down manually, execute `Ctrl-C`.

### docker build

Run

```bash
docker build -t aa/angular-frontend .
docker run -p 3000:80 --rm aa/angular-frontend
```

Then you can go to http://localhost:3000 on your browser and screw around with it.
Functionality is dependant on the backend websockets server being deployed.

This can also be run made to run either production or dev via setting the build arg `configuration`.

`docker build -t "some-name" --build-arg configuration=""` will build in development mode.

`docker build -t "some-name" --build-arg configuration="production"` will build in production mode.

### Prod build

To build the files in prod mode (productionized and with production websocket server as target, do)

```bash
    npm install
    npm run build -- --output-path=./dist/out --configuration production
```

The files at dist/out can then be served via s3, or whatever default hosting service you wanna use.

## license

MIT © [Andreas Abdi](https://github.com/AndreasAbdi)
