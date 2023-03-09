function montarErro(error) {
    if(error.errors){
        return error.errors.map(err => err.msg);
    }
    if(error.message){
        return [error.message]
    }
    return ['Algum erro aconteceu tente novamente mais tarde']
}

const handleError = function (error, req, res, next) {
    const erros = montarErro(error);

    res.status(error.status || 500);
    res.json(erros);
}

module.exports = handleError;


