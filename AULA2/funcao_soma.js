
function soma(valor1, valor2) {
    return valor1 + valor2;
}

function media(valor1, valor2, valor3) {
    const total_soma = valor1 + valor2 + valor3;
    const resultado = total_soma / 3;
    return resultado;
}

// exporta como objeto
// para poder exportar multiplos elementos
module.exports = {
    soma, 
    media, 
    attr: 'exportarString' 
};

