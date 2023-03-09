require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const handler404Error = require('./src/middewares/handler404Error');
const app = express();

const itemRoute = require('./src/routes/item.route');
const usuarioRoute = require('./src/routes/usuario.route');
const handleError = require('./src/middewares/handleError');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoute);
app.use('/api/itens', itemRoute);
app.use(handler404Error);
app.use(handleError);
app.listen(process.env.PORT, () => {console.log('rodando')})