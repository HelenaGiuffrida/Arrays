const numero = [43, 50, 65, 12]

const soma = numero.reduce(function (acum, atual) {
    return atual + acum
},0)

console.log(soma)