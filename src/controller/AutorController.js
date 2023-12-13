const { AutorModel } = require('../model/AutorModel');

class AutorController {
    static async create(req, res) {
        const { nome, datanasc } = req.body;

        if (!nome || !datanasc)
            return res.status(400).send({ message: "Insira todos os dados!" });

        const autor = {
            nome: nome,
            datanasc: datanasc
        }

        try {
            await AutorModel.create(autor);
            return res.status(201).send({ message: "O autor foi criado com sucesso."});
        }
        catch (error) {
            return res.status(500).send({ message: "Algum erro ocorreu ao tentar criar o autor.", error: error.message })
        }
    }

    static async getAutor(id) {
        try {
            const autor = await AutorModel.findById(id);
            return autor;
        }
        catch(error) {
            return res.status(404).send({ message: "Erro ao buscar o autor.", error: error});
        }
    }
}

module.exports = AutorController;