const calculo1 = function () {

};

const calculo2 = (a, b) => ({ nome: "leonardo" });

const calculo3 = (a, b) => {
    return a + b;
};

const divideDois = valor => valor / 2;

// mesma coisa que acima
const divideDois2 = function (valor) {
    return valor / 2;
}

const resultado = divideDois(120);

console.log(resultado);

const self = this;

const teste = (param1, param2) => { console.log(this) };
const display = (ev) => ev.target.text;

const pessoa = {
    nome: "Leonardo",
    apresentaNome() {
        console.log(this.nome);
    },
    apresentaOla() {
        console.log('Olá ');
        this.apresentaNome();
    }
};

class Pessoa {
    teste() {
        
    }
}

const pessoa1 = new Pessoa();

// pessoa.apresentaNome();
pessoa.apresentaOla();