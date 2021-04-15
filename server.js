const express = require('express')
const morgan = require("morgan");
const {setupRateLimit} = require("./ratelimit");
const {setupCreditCheck} = require("./creditcheck");
const {ROUTES} = require("./routes");
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");

const app = express()
const port = 3000;


app.use(morgan('combined'));

setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
