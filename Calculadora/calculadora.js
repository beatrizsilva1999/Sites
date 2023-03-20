let expressao = '';

function adicionarNumero(numero) {
  document.getElementById('resultado').value += numero;
  expressao += numero;
}

function adicionarOperador(operador) {
  document.getElementById('resultado').value += operador;
  expressao += operador;
}

function limpar() {
  document.getElementById('resultado').value = '';
  expressao = '';
}

function calcular() {
  const resultado = eval(expressao);
  document.getElementById('resultado').value = resultado;
  expressao = resultado.toString();
}
