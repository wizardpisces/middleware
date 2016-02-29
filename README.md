## Regarding Issues

simple middleware to help make use middleware easier

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install --save-dev middleware-tool
```

## API AND EXAMPLE

```javascript
var MiddleWare = require('middleware-tool');
var app = new MiddleWare();
app.use(function(next) {
    console.log(1);
    next();
    console.log(4);

});

app.use(function(next) {
    console.log(2);
    next();
});

app.reboot();
//1 2 4

app.use(function(next) {
    console.log(3);
    next();
});

app.boot();
//1 2 4

app.reboot();
//1 2 3 4