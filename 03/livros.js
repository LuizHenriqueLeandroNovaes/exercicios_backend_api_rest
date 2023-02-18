const livros = require("./dados");

const Obter = (req,res) => {

    return res.status(200).json(livros);
}

const ID = (req,res) => {

    const livro_id = Number(req.params.id);

    if(isNaN(livro_id)){
        return res.status(400).json({mensagem: "O valor do parametro ID da URL não é um número válido."})
    }

    const livro = livros.find(livro => livro.id === livro_id);

    if(!livro){
        return res.status(404).json({mensagem: "Não existe livro para o ID informado."});

    }

    return res.json(livro);

}

const cadastrar = (req,res) => {

    const {titulo, autor , ano, numPaginas} = req.body;

    let i = 1 ;

    if(!titulo){
        return res.status(404).json({mensagem: "O campo titulo é obrigatório."})
    }
    if(!autor){
        return res.status(404).json({mensagem: "O campo autor é obrigatório."})
    }
    if(!ano){
        return res.status(404).json({mensagem: "O campo ano é obrigatório."})
    }
    if(!numPaginas){
        return res.status(404).json({mensagem: "O campo numPaginas é obrigatório."})
    }
    const novolivro = {
        id: i,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novolivro);

    i++;

    return res.status(201).json(novolivro);
}

const alternar_livro = (req,res) => {

    const {titulo, autor , ano, numPaginas} = req.body;
    
    if(!titulo){
        return res.status(404).json({mensagem: "O campo titulo é obrigatório."})
    }
    if(!autor){
        return res.status(404).json({mensagem: "O campo autor é obrigatório."})
    }
    if(!ano){
        return res.status(404).json({mensagem: "O campo ano é obrigatório."})
    }
    if(!numPaginas){
        return res.status(404).json({mensagem: "O campo numPaginas é obrigatório."})
    }

    const existente = livros.find(livro => livro.id === Number(req.params.id));
    
    existente.titulo = titulo;
    existente.autor = autor;
    existente.ano = ano;
    existente.numPaginas = numPaginas;
    
    return res.json({mensagem: 'Livro substituido'});
    
}


const alternar_parte = (req,res) => {

    const existente = livros.find(livro => livro.id === Number(req.params.id));

    const {titulo, autor , ano, numPaginas} = req.body;

    if(ano){
        existente.ano = ano;
    }

    if(numPaginas){
        existente.numPaginas = numPaginas;
    }
    if(titulo){
        existente.titulo = titulo;
    }

    if(autor){
        existente.autor = autor;
    }

    return res.json({mensagem: 'Livro alterado'});
}

const excluir = (req,res) => {

    
    const indice = livros.findIndex(livro => livro.id === Number(req.params.id));

    if(indice < 0){
        return res.status(404).json({mensagem: "Não existe livro para ser excluido pelo ID informado."})
    }

   livros.splice(indice,1);

    return res.json({mensagem: 'Livro removido'});
}

module.exports = {
    Obter,
    ID,
    cadastrar,
    alternar_livro,
    alternar_parte,
    excluir
}