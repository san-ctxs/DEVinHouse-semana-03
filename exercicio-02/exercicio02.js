function somaBotao() {
  let primNum = parseInt(document.getElementById("numUm").value);
  let segNum = parseInt(document.getElementById("numDois").value);
  let resultado = primNum + segNum;
  document.getElementById("result").value = resultado
}
function subBotao() {
  let primNum = parseInt(document.getElementById("numUm").value);
  let segNum = parseInt(document.getElementById("numDois").value);
  let resultado = primNum - segNum;
  document.getElementById('result').value = resultado;
}
function multBotao() {
  let primNum = parseInt(document.getElementById("numUm").value);
  let segNum = parseInt(document.getElementById("numDois").value);
  let resultado = primNum * segNum;
  document.getElementById('result').value = resultado;
}
function divBotao() {
  let primNum = parseInt(document.getElementById("numUm").value);
  let segNum = parseInt(document.getElementById("numDois").value);
  let resultado = primNum / segNum;
  document.getElementById('result').value = resultado;
}