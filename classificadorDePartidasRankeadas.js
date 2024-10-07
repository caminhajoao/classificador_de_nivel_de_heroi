function calcularNivelJogador(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldo = vitorias - derrotas;
  
    // Define o nível com base no saldo
    let nivel;
    if (saldo < 10) {
      nivel = "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
      nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
      nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
      nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
      nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Exibe a mensagem final
    console.log(`O herói tem um saldo de ${saldo} e está no nível de ${nivel}`);
  }
  
  // Exemplo de uso:
  calcularNivelJogador(100, 25); // O herói tem um saldo de 50 e está no nível de Ouro