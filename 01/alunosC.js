const alunos = require('./alunosD');

let id_aluno = 1;

const obteralunos = (req, res) => {
    return res.json(alunos);
}

const obteralunopeloId = (req, res) =>{

    const id_requisitado = Number(req.params.id);

    if(isNaN(id_requisitado)){
        return res.status(400).json({mensagem: 'O id informado não é um numero válido'});
    }

    const aluno = alunos.find( aluno => aluno.id === id_requisitado );

    if(!aluno){
        return res.status(404).json({ Mensagem: 'Aluno não encontrado'});  
    }

    return res.json(aluno);
}

const adicionarestudante = (req, res) => {
    
    const {nome, sobrenome, idade, curso} = req.body;

    if(!nome){
        return res.status(400).json({ mensagem: 'O nome deve ser informado'});
    }

    if(!sobrenome){
        return res.status(400).json({ mensagem: 'O sobrenome deve ser informado'});
    }

    if(!idade){
        return res.status(400).json({ mensagem: 'A idade deve ser informado'});
    }

    if(!curso){
        return res.status(400).json({ mensagem: 'O curso deve ser informado'});
    }

    if(idade < 18){
        return res.status(400).json({ mensagem: 'O aluno a ser adicionado deve ter pelo menos 18 anos'});
    }

    const aluno_novo = {
        id: id_aluno, nome , sobrenome, idade, curso
    }

    alunos.push(aluno_novo);

    id_aluno++;

    return res.status(201).send();
}

const excluir_aluno = (req, res) => {
    const id_aluno = Number(req.params.id);

    if(isNaN(id_aluno)){
        return res.status(400).json({ mensagem: 'O id informado não é um numero valido'});
    }

    const indice_excluir_aluno = alunos.findIndex(aluno => aluno.id === id_requisitado);

    if(indice_excluir_aluno < 0){
        return res.status(400).json({ mensagem: 'Aluno não encontrado'});
    }

    const excludo_aluno = alunos.splice(excludo_aluno, 1);

    return res.json(excludo_aluno);

}

module.exports = {
    obteralunos,
    obteralunopeloId,
    adicionarestudante,
    excluir_aluno
}

