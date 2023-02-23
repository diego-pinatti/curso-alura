const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@provedor.com.br",
  telefone: ["1955555555", "19232332035"]
};

cliente.endereco = [
  {
    rua: "R. José da Silva",
    numero: 789,
    apartamento: true,
    complemento: "ap 545",
  }
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== 'object' && tipo !== 'function') {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  }
}

