import User from "./Heranca-Classe_User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
  return `${estudante} passou no curso ${curso}.`
  }
}