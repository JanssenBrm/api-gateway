const { createProxyMiddleware } = require('http-proxy-middleware');


const checkCredit = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('No sufficient credits');
        }, 500);
    })
}

const setupCreditCheck = (app, routes) => {
    routes.forEach(r => {
        if (r.creditCheck) {
            console.log("SETTING UP CREDIT CHECK", r.url);
            app.use(r.url, function(req, res, next) {
                checkCredit().then(() => {
                    next();
                }).catch((error) => {
                    res.status(402).send({error});
                })
            });
        }
    })
}

exports.setupCreditCheck = setupCreditCheck
