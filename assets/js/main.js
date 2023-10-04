function criaCalculadora() {
    return {
        display: document.querySelector(".display"),        
        
        
        iniciar() {
            this.cliqueBotoes();
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        deletarUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = conta;
            }
            catch(e) {
                alert("Conta inválida");
            }
        },

        cliqueBotoes() {
            
            document.addEventListener("click", function(e) {

                const elemento = e.target;

              if(elemento.classList.contains("btn-num")){
                    const valor = elemento.innerText;
                    console.log(valor)
                    this.btnParaDisplay(valor);
                }

                if(elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-del')) {
                    this.deletarUm();
                }

                if(elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        clearDisplay() {
            this.display.value = '';
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();
