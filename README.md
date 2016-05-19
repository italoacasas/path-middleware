# Path Express Middleware

[![Join the chat at https://gitter.im/italoacasas/path-middleware](https://badges.gitter.im/italoacasas/path-middleware.svg)](https://gitter.im/italoacasas/path-middleware?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/path-middleware.svg)](https://badge.fury.io/js/path-middleware)
[![Build Status](https://travis-ci.org/italoacasas/path-middleware.svg?branch=master)](https://travis-ci.org/italoacasas/path-middleware)
[![Dependency Status](https://david-dm.org/italoacasas/path-middleware.svg)](https://david-dm.org/italoacasas/path-middleware)
[![devDependency Status](https://david-dm.org/italoacasas/path-middleware/dev-status.svg?theme=shields.io)](https://david-dm.org/italoacasas/path-middleware#info=devDependencies)

[![NPM](https://nodei.co/npm/path-middleware.png?downloads=true)](https://nodei.co/npm/path-middleware/)

Express Middleware to handle endpoints

## Installation
`npm install --save path-middleware`

## Example of use
```javascript

const app = require('express')();
const pathMiddleware = require('path-middleware');
const request = require('request')

app.use(pathMiddleware(process.env.API_ENDPOINT, endpointName));

app.get('/', (req, res) => {
    const data = request.get(res.endpointName);
});
```

## API
```javascript
pathMiddleware(endpoint, endpointName);
```

## License
Copyright (c) 2016 Italo A. Casas <me@italoacasas.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
