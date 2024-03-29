const itemRepository = require('../repositories/item.repository')
const createError = require('http-errors');
const entradaRepository = require('../repositories/entrada.repository');


const criar = async function(entrada) {
   
    const entradaCriado = await entradaRepository.criar(entrada);
    const item = await itemRepository.encontrarPorId(entrada.item_id);
    if(!item) {
        return createError(404, 'item não existe, entrada inválida');
    }
    const quantidade = entradaCriada.quantidade + item.quantidade;

    await itemRepository.atualizar({quantidade}, item.id);
    return entradaCriado;
}


const encontrarTodos = async function() {
    const entradas = await entradaRepository.encontrarTodos();
    return entradas;
}
const encontrarPorId = async function (id) {
	const entrada = await entradaRepository.encontrarUmPorWhere({ id: id });

	if (!entrada) {
		return createError(404,  'Entrada não encontrada');
	}
	
	return entrada;
}

module.exports = {
    criar:criar,
    encontrarTodos:encontrarTodos,
    encontrarPorId:encontrarPorId,
}