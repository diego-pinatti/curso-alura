import User from "./Heranca-Classe_User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
  return `${estudante} passou no curso ${curso}.`
  }
}

const novoDocente = new Docente('Daisy', 'da@da.com.br', '2022-01-01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Diego', 'JS'))