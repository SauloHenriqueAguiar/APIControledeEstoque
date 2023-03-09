const validatorMessage = function(atributo) {
    return `A propriedade '${atributo}' é invalido`;

}

const notExists = function(atrivuto) {
    return `${atributo} não existe`;

}

module.exports = {
    validatorMessage: validatorMessage,
    notExists:notExists
}