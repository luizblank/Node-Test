const express = require('express');
const AutorController = require('../controller/AutorController');
const route = express.Router();

route
    .post('/', AutorController.create);

module.exports = route;