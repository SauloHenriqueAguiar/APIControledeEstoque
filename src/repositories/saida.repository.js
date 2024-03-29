const {Saida,Item,Usuario} = require('../database/models/index');

const criar = async function(Saida) {
    const saidaCriado = await Saida.create(Saida);
    return saidaCriado;
}

const encontrarTodos = async function() {
    const itens = await Saida.findAll({
        include: [{
            model: Item,
            as:'item'
        },{
            model:Usuario,
            as:'usuario'
        }]
    });
    return itens;
}
const encontrarporId = async function(id) {
    const saida = await Saida.findByPk(id);
    return saida;
}

const encontrarUmPorWhere = async function(where) {
    const saida = await Saida.findOne({
        where:where,
        include: [{
            model: Item,
            as:'item'
        },{
            model:Usuario,
            as:'usuario'
        }]
    });
    return saida;
}

module.exports = {
    criar:criar,
    encontrarTodos: encontrarTodos,
    encontrarporId:encontrarporId,
    encontrarUmPorWhere:encontrarUmPorWhere,
    
}
