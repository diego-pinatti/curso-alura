const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@provedor.com.br",
  telefone: ["1955555555", "19232332035"]
};

cliente.enderecos = [
  {
    rua: "R. José da Silva",
    numero: 789,
    apartamento: true,
    complemento: "ap 545",
  }
];

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],

}

console.log(encomenda);