class ComunidadeController{
    constructor(){

        this._comunidadeView = new ComunidadeView();
        this._codigosWrapper = document.querySelector('#codigos-wrapper');
        this._localDosPosts = document.querySelector('#codigos-postados');

    }

    listaPosts(){
      
        ConnectionFactory.getConnection()
            .then(connection => new CodigoDao(connection))
            .then(dao => dao.listaTudo())
            .then(posts => 
                 this._comunidadeView.model(posts)
            ).then(model => 
                this._comunidadeView.update(model, this._codigosWrapper)
            ).catch(erro => console.log(erro))
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