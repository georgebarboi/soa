const express = () => {
    const express = require("express");
    const cors = require("cors")({ origin: true });
    const app = express();

    app.use(cors);

    return app;
};

module.exports = express;