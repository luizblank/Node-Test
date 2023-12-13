const express = require('express');
const AutorRoute = require('../src/routes/AutorRoute');
const GravadoraRoute = require('../src/routes/GravadoraRoute');
const MusicaRoute = require('../src/routes/MusicaRoute');

module.exports = function(app) {
    app
        .use(express.json())
        .use('/api/autor', AutorRoute)
        .use('/api/gravadora', GravadoraRoute)
        .use('/api/musica', MusicaRoute)
}