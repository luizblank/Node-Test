const mongoose = require('mongoose');

const GravadoraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    }
});

const GravadoraModel = mongoose.model('Gravadora', GravadoraSchema);
exports.GravadoraModel = GravadoraModel;
exports.GravadoraSchema = GravadoraSchema;