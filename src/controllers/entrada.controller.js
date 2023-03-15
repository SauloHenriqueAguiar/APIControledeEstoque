const { response } = require('express');
const { validationResult } = require('express-validator');
const entradaService = require('../services/entrada.service');
const {validationResult} = require('express-validator');
const createError = require('http-errors');



const criar = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw createError(422, {errors: errors.array()}); 
        }
        const response = await entradaService.criar({
            quantidade:req.body.quantidade,
            usuario_id:req.usuario_id,
            preco: req.body.preco,
            item_id: req.body.item_id
        });
       
        res.send(response);

    } catch (error) {
        return next(error);
    }

}

const encontrarTodos = async function (req, res,next) {
    try {
        const response = await entradaService.encontrarTodos();
       
        res.send(response);
    } catch (error) {
        next(error);
    }
    
}
const encontrarporid = async function (req, res,next) {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw createError(422, {errors: errors.array()}); 
        }
        const response = await entradaService.encontrarporid(req.params.id);
        if (response && response.message){
            throw response;
        }
        res.send(response);
        
    } catch (error) {
        next(error)
    }
   
}

module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarporid: encontrarporid,
    
}