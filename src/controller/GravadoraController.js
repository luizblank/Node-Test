const { GravadoraModel } = require('../model/GravadoraModel');

class GravadoraController {
    static async create(req, res) {
        const { nome, endereco, cnpj } = req.body;

        if (!nome || !endereco || !cnpj)
            return res.status(400).send({ message: "Insira todos os dados!" });

        const gravadora = {
            nome: nome,
            endereco: endereco,
            cnpj: cnpj
        }

        try {
            await GravadoraModel.create(gravadora);
            return res.status(201).send({ message: "A gravadora foi criada com sucesso."});
        }
        catch (error) {
            return res.status(500).send({ message: "Algum erro ocorreu ao tentar criar a gravadora.", error: error.message })
        }
    }

    static async getAll(req, res) {
        try {
            const gravadoras = await GravadoraModel.find();
            return res.status(200).send({ data: gravadoras });
        }
        catch(error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const gravadora = await GravadoraModel.findById(id);
            return res.status(200).send({ data: gravadora });
        }
        catch(error) {
            return res.status(500).send({ message: "Erro ao buscar a gravadora", error: error});
        }
    }

    static async updateById(req, res) {
        const { id } = req.params;
        const { nome, endereco, cnpj } = req.body;
        try {
            const newGravadora = await GravadoraModel.findByIdAndUpdate(
                id,
                {
                    nome: nome,
                    endereco: endereco,
                    cnpj: cnpj
                }
            );
            return res.status(200).send({ message: "Gravadora atualizada com sucesso!" });
        }
        catch {
            return res.status(500).send({ message: "Erro ao atualizar a gravadora", error: error });
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Passe o ID da gravadora a ser deletada!"});

        try {
            await GravadoraModel.findByIdAndDelete(id);
            return res.status(200).send({ message: "Gravadora deletada com sucesso!"});
        }
        catch  {
            return res.status(500).send({ message: "Erro ao deletar a gravadora."});
        }
    }

    static async getGravadora(id) {
        try {
            const gravadora = await GravadoraModel.findById(id);
            return gravadora;
        }
        catch(error) {
            return res.status(404).send({ message: "Erro ao buscar a gravadora.", error: error});
        }
    }
}

module.exports = GravadoraController;