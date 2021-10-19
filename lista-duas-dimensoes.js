const alunos = [`Joao`, `Juliana`, `Caio`, `Ana`]
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)

const exibeNomeNota = (nomeDoAluno) =>{
    if (listaDeNotasEAlunos[0] .includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return " Aluno não cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))