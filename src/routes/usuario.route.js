const express = require('express');
const usuarioValidator = require('../validators/usuario.validator')
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const { encontrarPorId } = require('../validators/usuario.validator');
const verifyJWT = require('../middewares/authorizator');

router.post('/',usuarioValidator.criar(),usuarioController.criar);

router.post('/login',usuarioValidator.login(),usuarioController.login);

route.get('/',verifyJWT,usuarioController.encontrarTodos);

route.get('/:id',verifyJWT,usuarioValidator.encontrarPorId(),usuarioController.encontrarporid);

router.put('/:id',verifyJWT,usuarioValidator.atualizar(),usuarioController.atualizar);

route.delete('/:id',verifyJWT,usuarioValidator.deletar(),usuarioController.deletar);

module.exports = router;

