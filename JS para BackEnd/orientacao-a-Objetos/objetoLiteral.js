const user = {
  nome: "Diego",
  email: "diego@diego.com.br",
  nascimento: "1987/12/21",
  role: "admin",
  ativo: true,
  exibirinfos: function() {
    console.log(this.nome, this.email)
  }
}

const exibir = function() {
  console.log(this.nome)
}

const exibirNome = exibir.bind(user)

exibirNome()
exibir()