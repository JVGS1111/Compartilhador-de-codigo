class CodigoDao{
    constructor(connection){

        this._connection = connection;
        this._store = 'codigos';
    }

    adicionar(codigo){

        return new Promise((resolve, reject)=> {

            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .add(codigo)
            
                request.onsuccess = e => {
                    console.log('objeto salvo com sucesso');
                    resolve();
                }

                request.onerror = e => {
                    console.log(e.target.error);
                    reject('erro ao salvar o objeto');
                }
        })
    }

    listaTudo(){
        return new Promise((resolve, reject) => {

            let cursor = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .openCursor();

            let codigos = [];

            cursor.onsuccess = e => {
                let postAtual = e.target.result;

                if(postAtual){
                    let dado = postAtual.value;

                    codigos.push(new Codigo(dado._nomeDoProjeto, dado._descricao, dado._linguagem, dado._corDaBorda, dado._codigo, dado._data))

                    postAtual.continue();
                }else{
                    
                    resolve(codigos)
                }             
            } 
            
            cursor.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível importar os posts')
            }
        })
    }

}