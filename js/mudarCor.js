const botaoTrocarCor = document.querySelector('#botao-trocar-cor')
const borda = document.querySelector('.Area-de-codigo');


function mudarCorDaBorda(){
    var o = Math.round, r = Math.random, s = 255;
    let cor =  'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    
    botaoTrocarCor.style.backgroundColor = cor
    borda.style.backgroundColor = cor;
    
}

botaoTrocarCor.addEventListener('click',() =>{
    mudarCorDaBorda();
    
})