const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    datanasc: {
        type: Date,
        required: true
    }
});

const AutorModel = mongoose.model('Autor', AutorSchema);
exports.AutorModel = AutorModel;
exports.AutorSchema = AutorSchema;