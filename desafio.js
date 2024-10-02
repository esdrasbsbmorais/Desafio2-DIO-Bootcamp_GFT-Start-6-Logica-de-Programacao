const vitorias = 200;
const derrotas = 100;

function calculaRanking(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;
  let openSwitch = true;

  switch (openSwitch) {
    case saldoVitorias < 10:
      nivel = "Ferro";
      break;
    case saldoVitorias > 10 && saldoVitorias <= 20:
      nivel = "Bronze";
      break;
    case saldoVitorias > 20 && saldoVitorias <= 50:
      nivel = "Prata";
      break;
    case saldoVitorias > 50 && saldoVitorias <= 80:
      nivel = "Ouro";
      break;
    case saldoVitorias > 80 && saldoVitorias <= 90:
      nivel = "Diamante";
      break;
    case saldoVitorias > 90 && saldoVitorias <= 100:
      nivel = "Lendário";
      break;
    case saldoVitorias > 100:
      nivel = "Imortal";
      break;
    default:
      nivel = "Invalido";
      console.log("Por favor, digite um saldoVitorias valido!");
      break;
  }

  const message = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  console.log(message);
}

calculaRanking(vitorias, derrotas);
