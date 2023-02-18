const Validacao_da_Senha = (req, res, next) => {

    const { senha } = req.query;

    if(senha !== 'cubos123'){
        return res.status(403).json({ mensagem: 'Senha está incorreta'})
    }

    next();
}

module.exports = Validacao_da_Senha ;