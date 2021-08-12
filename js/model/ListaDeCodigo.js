class ListaDeCodigo{
    constructor(){
        this._listaDeCodigo = []
    }

    adicionarCodigoParaLista(codigo){
        this._listaDeCodigo.push(codigo)
        console.log(codigo);
    }

    get listaDeCodigos(){
        return this._listaDeCodigo;
    }
}