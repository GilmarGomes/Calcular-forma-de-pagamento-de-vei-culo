const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", () => {
  const veiculo = document.querySelector("#inVeiculo").value;
  const valor = parseFloat(document.querySelector("#inPreco").value);
  const resultElement = document.querySelector("#result");
  const inMeses = parseInt(document.querySelector("#inMeses").value, 10);
  const modeloVeiculo = document.querySelector("#veiculo");
  const entrada = document.querySelector("#entrada");
  const parcelasMeses = document.querySelector("#parcelas");

  if (veiculo === "" || isNaN(valor) || isNaN(inMeses) || inMeses === 0) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const valorEntrada = valor - 0.3 * valor;
  const parcelas = (valor - valorEntrada) / inMeses;

  modeloVeiculo.textContent = `Promoção: ${veiculo}`;
  entrada.textContent = `Entrada de R$: ${valorEntrada.toFixed(2)}`;
  parcelasMeses.textContent = `+ ${inMeses} parcelas de R$: ${parcelas.toFixed(
    2
  )}`;
  resultElement.style.display = "block";
});

const resultElement = document.querySelector("#result");
resultElement.style.display = "none";
