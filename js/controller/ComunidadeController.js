class ComunidadeController{
    constructor(){

        this._comunidadeView = new ComunidadeView();
        this._codigosWrapper = document.querySelector('#codigos-wrapper');
        this._localDosPosts = document.querySelector('.codigos-postados');

        this._menu = document.querySelector('.menu-mobile-aba');

    }

    listaPosts(){
      
        ConnectionFactory.getConnection()
            .then(connection => new CodigoDao(connection))
            .then(dao => dao.listaTudo())
            .then(posts => 
                 this._comunidadeView.model(posts)
            ).then(model => 
                this._comunidadeView.update(model, this._codigosWrapper)
            ).then(() => this.aplicarHighlight())
                .catch(erro => console.log(erro))
    }

    aplicarHighlight(){
        let codigoCache =  this._localDosPosts.querySelectorAll('code');
        console.log(codigoCache);
        codigoCache.forEach(tag => {
            hljs.highlightElement(tag);
        })
        
        
    }

    abrirMenu(){
        AbrirMenu.abrirMenu(this._menu);
    }

    excluirPost(target){
        let post = target.closest('.post');
        let key = parseInt(post.dataset.idpost);

        ConnectionFactory.getConnection()
            .then(connection => new CodigoDao(connection))
            .then(dao => dao.deletar(key))
            .then((mensagem) => 
                console.log(mensagem),
                post.remove())
            .catch(erro => console.log(erro))

             
    }
}