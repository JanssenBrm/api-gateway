const rateLimit = require("express-rate-limit");

const checkCredit = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('No sufficient credits');
        }, 500);
    })
}

const setupRateLimit = (app, routes) => {
    routes.forEach(r => {
        if (r.rateLimit) {
            app.use(r.url, rateLimit(r.rateLimit));
        }
    })
}

exports.setupRateLimit = setupRateLimit
