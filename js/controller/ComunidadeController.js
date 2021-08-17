class ComunidadeController{
    constructor(){

        this._comunidadeView = new ComunidadeView();
        this._codigosWrapper = document.querySelector('#codigos-wrapper');
        this._localDosPosts = document.querySelector('.codigos-postados');

        this._menu = document.querySelector('.menu-mobile-aba');


        this._posts;
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
            .then(() => this._posts = document.querySelectorAll('.post'))
            .catch(erro => console.log(erro))
    }

    buscarPost(event){
        let pesquisa = event;
        
        if(pesquisa.length > 0){
            this._posts.forEach( post => {
                var titulo = post.querySelector('h2').textContent;
                
                let expressao = new RegExp(pesquisa, "i");
                
                if(!expressao.test(titulo)){
                    post.classList.add("invisivel")
                } else {
                    post.classList.remove("invisivel")
                }
            })
        } else {
            this._posts.forEach( post => {
                post.classList.remove("invisivel");
            })
        }
        
    }

    aplicarHighlight(){
        let codigoCache =  this._localDosPosts.querySelectorAll('code');
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