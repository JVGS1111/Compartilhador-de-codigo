var ConnectionFactory = (function (){
    
    var stores = ['codigos']
    var version = 1;
    var connection = null;
    var dbname = 'BancoDeCodigos'
    var close = null;

    return class ConnectionFactory{
        constructor(){
            throw new Error('Não é possivel criar instancias de ConnectionFactory')
        }

        static getConnection(){

            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbname, version);

                openRequest.onupgradeneeded = e => {
                    
                    ConnectionFactory._createStores(e.target.result)

                }
                
                openRequest.onsuccess = e => {

                    if(!connection){
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function(){
                            throw new Error('Você nao pode fechar a conexão diretamente')
                        }
                    }
                    resolve(connection);
                }

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                }
            })
        }

        static _createStores(connection){

            stores.forEach(store => {
                
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store);
                }
                connection.createObjectStore(store, {keyPath: "chave", autoIncrement: true});
            });

        }

        static closeConnection(){
            if(connection){
                close();
                connection = null;
            }
        }
    }
})();
