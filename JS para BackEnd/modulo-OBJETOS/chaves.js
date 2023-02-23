const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@provedor.com.br",
  telefone: ["1955555555", "19232332035"]
};

//cliente.endereco = [
//  {
//    rua: "R. José da Silva",
//    numero: 789,
//    apartamento: true,
//    complemento: "ap 545",
// }
//];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("endereco")) {
  console.error("Erro. É necessário ter um endereço cadastrado.")
}