const express = require('express');
const GravadoraController = require('../controller/GravadoraController');
const route = express.Router();

route
    .get('/', GravadoraController.getAll)
    .get('/:id', GravadoraController.getById)
    .post('/', GravadoraController.create)
    .patch('/:id', GravadoraController.updateById)
    .delete('/:id', GravadoraController.deleteById)


module.exports = route;