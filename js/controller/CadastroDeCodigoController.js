class CadastroDeCodigoController{
    constructor(){
        this._codigoWrapper = document.querySelector('#codigo-wrapper');

        this._nomeDoProjeto = document.querySelector('#nome-do-projeto');
        this._descricao = document.querySelector('#descricao-do-projeto');
        this._seletorDeLinguagem = document.querySelector('#Linguagem');
        this._borda = document.querySelector('.Area-de-codigo');
        this._codigo = this._codigoWrapper.querySelector('code');
        this._botaoTrocarCor = document.querySelector('#botao-trocar-cor');

        this._listaDeCodigos = new ListaDeCodigo();
        this._highlightView = new HighLightView();
        this._mensagemView = new MensagemView();

        this._menu = document.querySelector('.menu-mobile-aba');
        this._localMensagemPostSalvo = document.querySelector('.mensagem-area');
        
    }


    selecionarLinguagem(){
        
        let model = this._highlightView.model(this._seletorDeLinguagem.value)
        this._highlightView.highLightUpdate(model, this._codigoWrapper);
        
    }

    mudarCorDaBorda(){
        let o = Math.round, r = Math.random, s = 255;
        let cor =  'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        
        this._botaoTrocarCor.style.backgroundColor = cor
        this._borda.style.backgroundColor = cor;
        
    }

    abrirMenu(){
        AbrirMenu.abrirMenu(this._menu);
    }

    fecharModalMensageDePostSalvo(){
        AbrirMenu.FecharModal(this._localMensagemPostSalvo);
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
            .then(() => 
                this._mensagemView.update(
                    this._mensagemView.model(),
                    this._localMensagemPostSalvo),
                this._limparCampos())
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

    _limparCampos(){
        this._nomeDoProjeto.value = '',
        this._descricao.value = '',
        this._seletorDeLinguagem.value = 'JavaScript',
        this._borda.style.backgroundColor = '#6BD1FF',
        this._botaoTrocarCor.style.backgroundColor = '#6BD1FF';
    }


}