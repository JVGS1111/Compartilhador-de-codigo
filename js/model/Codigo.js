class Codigo{
    constructor(nomeDoProjeto, descricao, linguagem, corDaBorda, codigo, data){
        this._nomeDoProjeto = nomeDoProjeto;
        this._descricao = descricao;
        this._linguagem = linguagem;
        this._corDaBorda = corDaBorda;
        this._codigo = codigo;
        this._data = new Date(data)
        Object.freeze(this);
    }

    get nomeDoProjeto(){
        return this._nomeDoProjeto;
    }

    get descricao(){
        return this._descricao;
    }

    get linguagem(){
        return this._linguagem;
    }

    get corDaBorda(){
        return this._corDaBorda;
    }

    get codigo(){
        return this._codigo;
    }

    get data(){
        return new Date(this._data);
    }
        
    
}