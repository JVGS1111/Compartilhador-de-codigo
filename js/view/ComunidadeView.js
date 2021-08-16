class ComunidadeView extends View{
    constructor(){
        super();
    }

    model(arrayDeCodigos){
        
            return `
            <div class="codigos-postados" id="codigos-postados">

                ${arrayDeCodigos.map((c) => {
               
               return  `<div class="post" data-idPost="${c._indexDbId}">

                    <div class="code-wrapper--post">
                        <div class="section-area-de-codigo--comunidade">
                            <div class="Area-de-codigo" style="background-color: ${c._corDaBorda};">
                                <div class="backgroud-Area-de-codigo">
                                    <span style="background-color: #FF5F56;"></span>
                                    <span style="background-color: #FFBD2E;"></span>
                                    <span style="background-color: #27C93F;"></span>
                                    <div class="clear"></div>
                                    <div class="codigo-wrapper" id="codigo-wrapper">
                                        <code class="preview hljs ${c._linguagem}" contenteditable="false" aria-label="editor">${c._codigo}</code>
                                    </div>
                                </div><!--backgroud-Area-de-codigo-->
                            </div><!--Area-de-codigo-->
                        </div><!--section-area-de-codigo-->
                    </div>
                    
                    <div class="code-info">
                        <h2>${c._nomeDoProjeto}</h2>
                        <p>${c._descricao}</p>
                        <div class="social-wrapper">
                            <div class="reacoes">
                                <img src="./imgs/heart.png" alt="" class="like">
                                <span class="like-quantidade">0</span>
                                <img src="./imgs/comentario.png" alt="" class="comentario">
                                <span class="comentario-qunatidade">0</span>
                                <span onclick="comunidadeController.excluirPost(event.target)" class="lixeira" id="lixeira"></span>
                            </div>
                            <div class="Usuario--post">
                                <img style="background-color: black;">
                                <h2>Nome</h2>
                            </div><!--Usuario--post-->
                        </div><!--social-wrapper-->
                    </div><!--code-info-->
                </div>
                    `
                }).join('')}
            </div>`
    

    };
         
}

