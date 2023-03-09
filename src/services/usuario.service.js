const usuarioRepository = require('../repositories/usuario.repository');
const createError = require('http-errors')
require('dotenv').config();
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');

const criar = async function(usuario) {
    const existeUsuario = await usuarioRepository.encontrarporWhere({email: usuario.email});
    if(existeUsuario) {
        return createError(409,'Usuario já existe');
    }
    const usuarioCriado = await usuarioRepository.criar(usuario);
    return usuarioCriado;
}

const login = async function (usuario) {
    const usuariologin = await usuarioRepository.encontrarporWhere({
        email: usuario.email});

    if(!usuariologin){
        return createError(401,'Usuario Invalido');

    }    
    const comparacaoSenha = await bcrypt.compare(usuario.senha, usuariologin.senha);
    
    if(!comparacaoSenha){
        return createError(401,'Usuario Invalido');
    }
    const token =sign({
        id:usuariologin.id
    },process.env.SECRET,{});
    delete usuariologin.senha
    return {
        auth: true,
        usuario:usuariologin,
        token: token
    }
}

const atualizar = async function(usuario,id) {
    const existeUsuario = await usuarioRepository.encontrarporid(id);
    if(!existeUsuario) {
        return createError(404, 'Usuario não existe');
    }
    usuarioRepository.atualizar(usuario,id);
    return await usuarioRepository.encontrarporid(id);
}

const encontrarTodos = async function() {
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}
const encontrarporid = async function(id) {
    const usuario = await usuarioRepository.encontrarporid(id);

    if(!usuario) {
        return createError(404,'usuario não encontrado');
    }
    return usuario;
}

const deletar = async function(id) {
    const usuario = await usuarioRepository.encontrarporid(id);

    if(!usuario) {
        return createError(404,'usuario não encontrado');
    }
    await usuarioRepository.deletar(id);
    return usuario;
}


module.exports = {
    criar:criar,
    atualizar:atualizar,
    encontrarTodos:encontrarTodos,
    encontrarporid:encontrarporid,
    deletar:deletar,
    login:login
}