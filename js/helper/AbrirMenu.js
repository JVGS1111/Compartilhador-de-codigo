
var AbrirMenu = (function AbrirMenu(){
    let estaAberto = false;
    return class AbrirMenu {

        constructor(){
            throw new Error('classe nao precisa ')
        }
       
        static abrirMenu(input){
            
            
            if(!estaAberto){
                input.style = "display: block";
                estaAberto = true;
            }else{
                input.style = "display: none";
                estaAberto = false;
            }
    
        }

        static FecharModal(input){
            input.firstChild.remove();
        }
    }
})()

