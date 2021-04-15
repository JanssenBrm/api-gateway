const morgan = require("morgan");

const setupLogging = (app) => {
    app.use(morgan('combined'));
}

exports.setupLogging = setupLogging
