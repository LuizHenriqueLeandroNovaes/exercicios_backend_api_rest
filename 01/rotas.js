const express = require('express');
const {obteralunos, obteralunopeloId, adicionarestudante, excluir_aluno} = require('./alunosC')

const rotas = express();

rotas.get('/alunos',obteralunos);
rotas.get('/alunos/:id',obteralunopeloId);
rotas.post('/alunos', adicionarestudante);
rotas.delete('/alunos/:id', excluir_aluno);

module.exports = rotas ;