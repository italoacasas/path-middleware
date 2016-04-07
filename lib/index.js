'use strict';

module.exports = (envVar, name) => {

    let uri = (req, res, next) => {
        res[name] = envVar;
        next();
    };

    return uri;
};
