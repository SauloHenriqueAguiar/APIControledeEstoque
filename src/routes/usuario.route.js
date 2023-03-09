const express = require('express');
const usuarioValidator = require('../validators/usuario.validator')
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const { encontrarPorId } = require('../validators/usuario.validator');

router.post('/',usuarioValidator.criar(),usuarioController.criar);

router.post('/login',usuarioValidator.login(),usuarioController.login);

route.get('/',usuarioController.encontrarTodos);

route.get('/:id',usuarioValidator.encontrarPorId(),usuarioController.encontrarporid);

router.put('/:id',usuarioValidator.atualizar(),usuarioController.atualizar);

route.delete('/:id',usuarioValidator.deletar(),usuarioController.deletar);

module.exports = router;

