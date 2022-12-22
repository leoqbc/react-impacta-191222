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
console.log(dados.data.users[0].nome);

// estrutura de numeros inteiros
const numeros = [1, 2, 3, 4];

// 0 , 1, 2, 3
const mista = [1, "nome", [1, 2], false, {}, {}];


const [um, dois, tres, quatro] = numeros;

console.log(tres);
