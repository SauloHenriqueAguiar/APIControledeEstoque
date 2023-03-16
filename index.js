require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const handler404Error = require('./src/middewares/handler404Error');
const app = express();

const itemRoute = require('./src/routes/item.route');
const usuarioRoute = require('./src/routes/usuario.route');
const entradaRoute = require('./src/routes/entrada.route');
const saidaRoute = require('./src/routes/saida.route');
const itemReportRoute = require('./src/routes/item-report.route');
const handleError = require('./src/middewares/handleError');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoute);
app.use('/api/itens', itemRoute);
app.use('/api/entradas', entradaRoute);
app.use('/api/saidas', saidaRoute);
app.use('/api/item-reports', itemReportRoute);
app.use(handler404Error);
app.use(handleError);
app.listen(process.env.PORT, () => {console.log('rodando')})