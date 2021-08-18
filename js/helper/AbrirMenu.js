
var AbrirMenu = (function AbrirMenu(){
    let estaAberto = false;
    return class AbrirMenu {

        constructor(){
            throw new Error('classe nao precisa ')
        }
       
        static abrirMenu(input){
            
            
            if(!estaAberto){
                input.classList.remove("menu-mobile-aba--desativar");
                input.classList.add("menu-mobile-aba--ativo");
                estaAberto = true;
            }else{
                //input.style = "display: none";
                input.classList.remove("menu-mobile-aba--ativo");
                input.classList.add("menu-mobile-aba--desativar");
                estaAberto = false;
            }
            
        }

        static FecharModal(input){
            input.firstChild.remove();
        }
    }
})()

