const itemRepository = require('../repositories/item.repository');
const createError = require('http-errors')


const criar = async function(item) {
   
    const itemCriado = await itemRepository.criar(item);
    return itemCriado;
}



const atualizar = async function(item,id) {
    const existeItem = await itemRepository.encontrarporid(id);
    if(!existeItem) {
        return createError(404, 'Item não existe');
    }
    ItemRepository.atualizar(item,id);
    return await itemRepository.encontrarporid(id);
}

const encontrarTodos = async function() {
    const itens = await itemRepository.encontrarTodos();
    return itens;
}
const encontrarporid = async function(id) {
    const item = await itemRepository.encontrarporid(id);

    if(!item) {
        return createError(404,'item não encontrado');
    }
    return item;
}

const deletar = async function(id) {
    const item = await itemRepository.encontrarporid(id);

    if(!item) {
        return createError(404,'item não encontrado');
    }
    await itemRepository.deletar(id);
    return item;
}


module.exports = {
    criar:criar,
    atualizar:atualizar,
    encontrarTodos:encontrarTodos,
    encontrarporid:encontrarporid,
    deletar:deletar,
   
}