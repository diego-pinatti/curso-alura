const user = {
  nome: "Diego",
  email: "diego@diego.com.br",
  nascimento: "1987/12/21",
  role: "estudante",
  ativo: true,
  exibirinfos: function() {
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: "José",
  email: "j@j.com.br",
  role: "admin",
  criarCurso() {
    console.log('curso criado!')
  }  
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirinfos()