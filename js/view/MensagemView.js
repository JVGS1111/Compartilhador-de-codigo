class MensagemView extends View{
    constructor(){
        super()
        
    }


    model(){
        
        return ` 
            <div class="modal-codigo-salvo-com-sucesso">
                <div class="mensagem">
                    <div onclick="cadastroDoCodigoController.fecharModalMensageDePostSalvo()" class="botaoFechar"><span>x</span></div>
                    <h2>Post Criado!</h2>
                    <p>Seu codigo está salvo na área de Comunidade</p>
                </div>
            </div>
            `

    }
}