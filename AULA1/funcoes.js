function soma(a, b, c) {
    return a + b + c;
}

const resultado = soma(10, 12, 100);
console.log(resultado);

// atribuição de função anonima
const minhafunc = function () {
    console.log('minha função');
};

minhafunc();

// objeto literal
const dados = {
    nome: 'Objeto legal'
};

const teste = function () {
    console.log(this);
}.bind(dados);

teste();