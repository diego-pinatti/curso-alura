//Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

//'João', 'Juliana', 'Caio', 'Ana'
//10, 8, 7.5, 9

//Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias]

console.log(`A aluna da posição 2 da lista de alunos é: ${listaAlunosEMedias[0][2]}.
A nota dessa alune é ${listaAlunosEMedias[1][2]}`)