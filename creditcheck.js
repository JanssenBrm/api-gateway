const checkCredit = (auth) => {
    return new Promise((resolve, reject) => {
        console.log("Checking credit with token", auth);
        setTimeout(() => {
            reject('No sufficient credits');
        }, 500);
    })
}

const setupCreditCheck = (app, routes) => {
    routes.forEach(r => {
        if (r.creditCheck) {
            app.use(r.url, function(req, res, next) {
                checkCredit(req.headers["authorization"]).then(() => {
                    next();
                }).catch((error) => {
                    res.status(402).send({error});
                })
            });
        }
    })
}

exports.setupCreditCheck = setupCreditCheck
