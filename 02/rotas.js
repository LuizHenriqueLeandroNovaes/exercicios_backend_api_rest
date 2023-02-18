const express = require('express');
const { Convidados, cadastrar, deletar } = require("./convidados");

const rotas = express();

rotas.get('/convidados',Convidados);
rotas.post('/convidados',cadastrar);
rotas.delete('/convidados/:nome',deletar);

module.exports = rotas;