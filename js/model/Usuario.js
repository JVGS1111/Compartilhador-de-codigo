class Usuario {
    constructor(nome, senha){
        this._nome = nome;
        this._senha = senha;
        this._usuarioID = Math.random();
    }

    get nome(){
        return this._nome;
    }

    get senha(){
        return this._senha;
    }

    get UsuarioID(){
        return this._usuarioID;
    }
}