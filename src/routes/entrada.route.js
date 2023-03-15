const express = require('express');
const entradaController = require('../controllers/entrada.controller');
const router = express.Router();
const entradaController = require('../controllers/entrada.controller');
const verifyJWT = require('../middewares/authorizator')
const entradaValidator = require('../validators/entrada.validator')

router.post('/',verifyJWT,entradaValidator.criar(),entradaController.criar);

router.get('/',verifyJWT,entradaController.encontrarTodos);

router.get('/:id',verifyJWT,entradaValidator.encontrarPorId(),entradaController.encontrarporid);


module.exports = router;

