import User from "./Heranca-Classe_User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
  }
}

const novoAdmin = new Admin('Roberto', 'r@r.com.br', '2021-01-01')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 20))