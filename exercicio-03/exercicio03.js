document.getElementById('numInput').addEventListener('keydown', checarBotao, false);
function parOuImpar(numero) {
  numero = parseInt(document.getElementById('numInput').value);
  return numero % 2;
}
function checarBotao(e) {
  if (e.keyCode == '13') {
    if (parOuImpar() == 0) {
      document.getElementById('resultado').innerHTML = 'Seu número é par.';
    } else {
      document.getElementById('resultado').innerHTML = 'Seu número é ímpar.';
    }
  }
}