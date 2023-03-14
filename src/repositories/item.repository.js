const {Item} = require('../database/models/index');

const criar = async function(item) {
    const itemCriado = await Item.create(item);
    return itemCriado;
}

