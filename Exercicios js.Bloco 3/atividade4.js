const calculadora = {
    historico: [],

    somar(a, b) {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    },

    subtrair(a, b) {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    },

    verHistorico() {
        console.log("Histórico de operações:");

        this.historico.forEach(operacao => {
            console.log(operacao);
        });
    }
};

/* Realizando operações */
console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(20, 8));
console.log(calculadora.somar(7, 3));

/* Mostrando histórico*/
calculadora.verHistorico();