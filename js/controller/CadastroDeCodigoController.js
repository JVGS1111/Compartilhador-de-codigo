class CadastroDeCodigoController{
    constructor(){
        this._codigoWrapper = document.querySelector('#codigo-wrapper');

        this._nomeDoProjeto = document.querySelector('#nome-do-projeto');
        this._descricao = document.querySelector('#descricao-do-projeto');
        this._seletorDeLinguagem = document.querySelector('#Linguagem');
        this._borda = document.querySelector('.Area-de-codigo');
        this._codigo = this._codigoWrapper.querySelector('code');

        this._listaDeCodigos = new ListaDeCodigo();
        this._highlightView = new HighLightView();

        this._menu = document.querySelector('.menu-mobile-aba');

    
    }


    selecionarLinguagem(){
        
        let model = this._highlightView.model(this._seletorDeLinguagem.value)
        this._highlightView.highLightUpdate(model, this._codigoWrapper);
        
    }
    abrirMenu(){
        AbrirMenu.abrirMenu(this._menu);
    }
    
    aplicarHighlight(){
        let codigoCache =  this._codigoWrapper.querySelector('code');
        hljs.highlightElement(codigoCache);
        
    }
    
    adiciona(event){
        event.preventDefault();
        let codigoCadastrado = this.cria();

        ConnectionFactory.getConnection()
            .then(connection => new CodigoDao(connection))
            .then(codigoDao => codigoDao.adicionar(codigoCadastrado))
            .then(() => console.log('adicionado com sucesso'))
            .catch((erro) => console.log(erro))
            
    }

    cria(){

        return new Codigo(
            this._nomeDoProjeto.value,
            this._descricao.value,
            this._seletorDeLinguagem.value,
            this._borda.style.backgroundColor,
            this._codigo.innerHTML,
            new Date()
        )
    }


}