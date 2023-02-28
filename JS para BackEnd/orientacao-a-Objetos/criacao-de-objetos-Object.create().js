/* function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`
  }
}

function Admin(role) {
  User.call(this, 'Diego', 'd@d.com.br')
  this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novouser = new Admin('admin')

console.log(novouser.exibirInfos())
console.log(novouser.role) */

const user = {
  init: function(nome, email) {
    this.nome = nome
    this.email = email
  },

  exibirInfos: function() {
    return `${this.nome} ${this.email}`
  }
}

const novoUser = Object.create(user)
novoUser.init('Diego', 'd@d.com.br')
console.log(novoUser.exibirInfos())

//console.log(user.isPrototypeOf(novoUser))