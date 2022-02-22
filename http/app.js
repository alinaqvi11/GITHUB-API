const express = require('express');
const app = express();
const routes = require('../http/routes/gitHubRoutes')
app.use('/api',routes);

module.exports = app;