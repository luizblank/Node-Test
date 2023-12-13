const { validaCpf } = require("../common/validaCpf");

describe('Verificação de CPF', () => {
    it('Deve retornar se o cpf é válido ou não', () => {
        const res = validaCpf("705.484.450-52");
        expect(res).toBe(true);
    })
})