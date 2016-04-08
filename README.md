# Path Express Middleware

[![Join the chat at https://gitter.im/italoacasas/path-middleware](https://badges.gitter.im/italoacasas/path-middleware.svg)](https://gitter.im/italoacasas/path-middleware?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/path-middleware.svg)](https://badge.fury.io/js/path-middleware)
[![Build Status](https://travis-ci.org/italoacasas/path-middleware.svg?branch=master)](https://travis-ci.org/italoacasas/path-middleware)
[![Dependency Status](https://david-dm.org/italoacasas/path-middleware.svg)](https://david-dm.org/italoacasas/path-middleware)
[![devDependency Status](https://david-dm.org/italoacasas/path-middleware/dev-status.svg?theme=shields.io)](https://david-dm.org/italoacasas/path-middleware#info=devDependencies)

A Path Helper to handle endpoints.

## Installation
`npm install --save path-middleware`

## Example
```javascript
const pathHelper = require('path-middleware');
const request = require('request')

app.use(pathHelper(process.env.API_ENDPOINT, endpoint));

app.get('/', (req, res) => {
    const data = request.get(res.endpoint);
});
```
