const express = require('express');
const MusicaController = require('../controller/MusicaController');
const route = express.Router();

route
    .post('/', MusicaController.create);

module.exports = route;