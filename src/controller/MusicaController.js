const MusicaModel = require('../model/MusicaModel');
const AutorController = require('./AutorController');
const GravadoraController = require('./GravadoraController');

class MusicaController {
    static async create(req, res) {
        const { nome, autorid, gravadoraid, tempo, ano, estilo } = req.body;

        if (!nome || !autorid || !gravadoraid || !tempo || !ano || !estilo)
            return res.status(400).send({ message: "Insira todos os dados!" });

        const autor = await AutorController.getAutor(autorid);
        const gravadora = await GravadoraController.getGravadora(gravadoraid);

        const musica = {
            nome: nome,
            autor: autor,
            gravadora: gravadora,
            tempo: tempo,
            ano: ano,
            estilo: estilo
        }

        try {
            await MusicaModel.create(musica);
            return res.status(201).send({ message: "A musica foi criada com sucesso."});
        }
        catch (error) {
            return res.status(500).send({ message: "Algum erro ocorreu ao tentar criar a musica.", error: error.message })
        }
    }
}

module.exports = MusicaController;