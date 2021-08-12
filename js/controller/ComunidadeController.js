class ComunidadeController{
    constructor(){

        this._comunidadeView = new ComunidadeView();
        this._localDosPosts = document.querySelector('#codigos-postados')
    }

    listaPosts(){
      
       console.log('a');
        ConnectionFactory.getConnection()
            .then(connection => new CodigoDao(connection))
            .then(dao => dao.listaTudo())
            .then(posts => 
                 this._comunidadeView.model(posts)
            ).then(model => 
                this._comunidadeView.update(model, this._localDosPosts)
            ).catch(erro => console.log(erro))
    }
}