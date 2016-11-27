# Random Distrib source
<!--- [![Build Status][travis-badge]][travis-badge-url] -->

Generate random selection based on some distribution of events. 

## Prerequisites

Requires npm and nodeJs. 

## How to run

go to shell and run the following commands.

```bash
   npm install 
   npm start
```

To shut down manually, execute `Ctrl-C`.

## Testing

Testing related commands are. 
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

*Don't run e2e, application and unit tests at the same time, it will cause crashes.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.
Look for the example `app/app.component.spec.ts`.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.
Look for the example `e2e/app.e2e-spec.ts`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

<!--- 
TODO 
a[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
a[travis-badge-url]: https://travis-ci.org/angular/quickstart
-->
