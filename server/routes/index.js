const express = require('express');
const app = express();

//Incluyendo la referencia de usuario.js
app.use(require('./usuario'));
app.use(require('./login'));

module.exports = app;