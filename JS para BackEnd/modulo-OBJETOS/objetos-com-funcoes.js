const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@provedor.com.br",
  telefone: ["1955555555", "19232332035"],
  saldo: 200,
  efetuaPagamento: function(valor) {
    if(valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);

