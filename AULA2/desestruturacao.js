// estrutura de dado
const dados = {
    data: {
        users: [
            {
                nome: "Leonardo",
                email: "tumadjian@gmail.com"
            },
            {
                nome: "Pedro",
                email: "pedro@gmail.com"
            }
        ]
    }
};

// desestruturação mais complexa
const { 
    data: { 
        users: [ 
            { 
                nome: nome_cli1
            }, 
            { 
                nome: nome_cli2
            } 
        ] 
    }  
} = dados

console.log(dados.data.users[0].nome, dados.data.users[1].nome);
console.log(nome_cli1, nome_cli2);

// estrutura de numeros inteiros
const numeros = [1, 2, 3, 4];

// 0 , 1, 2, 3
const mista = [1, "nome", [1, 2], false, {}, {}];

const cliente = {
    nome: "João",
    email: "joao@gmail.com"
};

// desestruturação de arrays
const [,,terceiro] = numeros;

// desestruturação de objeto
const { nome, email } = cliente;

const novoCliente = {
    nome,
    email
};
// mesmo que: { nome: nome, email: email }

console.log(nome, email);
