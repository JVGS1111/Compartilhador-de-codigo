class CadastroUsuarioController{
    constructor(){

        this._formulario = document.querySelector('#formularioDeCadastro');
        this._nome = this._formulario.querySelector('#nome');
        this._senha = this._formulario.querySelector('#senha');
    }

    salvarUsuario(event){
        event.preventDefault();

        let usuario = this._criarUsuario();
        this._limparFormulario();
        console.log(usuario);
    }

    _criarUsuario(){
        return new Usuario(
            this._nome.value,
            this._senha.value,
        )
    }

    _limparFormulario(){
        this._nome.value = '';
        this._senha.value = '';
    }
}