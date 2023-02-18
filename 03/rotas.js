const express = require('express');

const { Obter , ID, cadastrar, alternar_livro, alternar_parte 
    ,excluir } = require('./livros');

const rotas = express();

rotas.get('/livros',Obter);
rotas.get('/livros/:id',ID);
rotas.post('/livros',cadastrar);
rotas.put('/livros/:id',alternar_livro);
rotas.patch('/livros/:id',alternar_parte);
rotas.delete('/livros/:id',excluir);


module.exports = rotas;