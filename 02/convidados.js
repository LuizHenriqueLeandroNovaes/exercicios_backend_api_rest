const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]

const Convidados = (req,res) =>{

    if(req.query.nome){

        return res.json(convidados);
    }

    const convidado = convidados.find(convidados => convidado === req.query.nome);

    if(!convidado){
        return res.status(404).json({mensagem: 
            "O convidado buscado não está presente na lista."})
    }

    return res.json({mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."});
}

const cadastrar = (req,res) => {

    const { nome } = req.body;

    if(!nome){
        return res.status(400).json({mensagem: 
            "O campo nome deve ser mandado no body da requisição"})
        
    }

    const existente = convidados.find(convidado => convidado === nome);

    if(existente){
        return res.status(400).json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. "
        });
    }

    convidados.push(nome);

    return res.status(201).json({mensagem: "Convidado cadastrado."})

}

const deletar = (req,res) => {

    const { nome } = req.params;

    const indice = convidados.findIndex(convidado => convidado === nome);

    if(indice < 0){
            return res.status(404).json({mensagem: 
                "O convidado a ser removido não está presente na lista."})
    
    }

    convidados.splice(indice,1);

        return res.json({mensagem: "Convidado removido."})
    
}

module.exports = {
    Convidados,
    cadastrar,
    deletar
}