const mongoose = require('mongoose');
const { AutorSchema } = require('./AutorModel');
const { GravadoraSchema } = require('./GravadoraModel');

const MusicaModel = mongoose.model('Musica',
    new mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        autor: {
            type: AutorSchema,
            required: true
        },
        gravadora: {
            type: GravadoraSchema,
            required: true
        },
        tempo: {
            type: Number,
            required: true
        },
        ano: {
            type: String,
            required: true
        },
        estilo: {
            type: String,
            required: true
        }
    })
);

module.exports = MusicaModel;