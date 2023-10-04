function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        
        
        
        
        
        iniciar() {
            this.cliqueBotoes();
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        cliqueBotoes() {
            
            document.addEventListener("click", function(e) {

                const elemento = e.target;

              if(elemento.classList.contains("btn-num")){
                    const valor = elemento.innerText;
                    console.log(valor)
                    this.btnParaDisplay(valor);
                }
            }.bind(this));
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();
