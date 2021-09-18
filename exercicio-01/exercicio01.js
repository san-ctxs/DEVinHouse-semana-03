function calcIdade() {
  let dataNascString = document.getElementById("dataNasc").value;
  let dataNasc = new Date(dataNascString);
  let anoNasc = dataNasc.getFullYear();
  let mesNasc = dataNasc.getMonth();
  let diaNasc = dataNasc.getDate() + 1;
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth();
  let diaAtual = dataAtual.getDate();

  if (mesNasc <= mesAtual && diaNasc <= diaAtual) {
    idade = anoAtual - anoNasc;
  } else {
    idade = anoAtual - anoNasc - 1;
  }
  document.getElementById("resultado").innerHTML = "Você tem " + idade + " anos.";
}