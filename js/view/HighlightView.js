class HighLightView extends View{
    constructor(){
        super();
    }

    model(linguagem){
        
        return  `<code class="preview hljs ${linguagem}" contenteditable="true" aria-label="editor"></code>`;
        //this.highLightUpdate(model, local)
    }

    highLightUpdate(model, local){
        
        let codigoCache =  local.querySelector('code');
        
        local.innerHTML = model;
        local.firstChild.innerHTML = codigoCache.innerHTML;
        
    }
    
}