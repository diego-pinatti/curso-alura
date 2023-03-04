import User from "./Heranca-Classe_User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Diego', 'Batista', 'd@d.com.br', '2022-01-01')
console.log(novoUser.nome)
novoUser.nome = 'Diego Batista'
console.log(novoUser.nome)
console.log(novoUser.sobrenome)

const novoAdmin = new Admin('Roberto', 'r@r.com.br', '2022-01-01')
console.log(novoAdmin.nome)