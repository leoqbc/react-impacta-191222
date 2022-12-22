// forEach, map, filter, reduce
const nomes = ['Leonardo', 'Luana', 'Matheus'];

nomes.forEach((valor, indice) => {
    console.log(valor, indice);
});

// map anda sobre todos elementos
// e o que retornar ele colocar numa
// nova array
const novos_nomes = nomes.map(valor => '<a>' + valor + '</a>');

console.log(nomes, novos_nomes);

// Filter
const nomesFiltrados = nomes.filter(nome => {
    if (nome[0] === 'L') {
        return nome;
    }
});

console.log(nomesFiltrados);

// reduce
// 1 * 2 * 3 * 4
const fatorial = [1, 2, 3, 4];

console.log('-----------');

const resultado = fatorial.reduce((prev, current, index, numeros) => {
    //console.log(prev, current, index, numeros);
    if (prev < current) {
        numeros[index] = prev;
    }
    return numeros;
});

console.log(fatorial);