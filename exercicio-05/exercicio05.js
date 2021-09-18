window.onload = horaAtt();
function horaAtt() {
  date = new Date();
  horas = date.getHours();
  minutos = date.getMinutes();
  segundos = date.getSeconds();
  document.getElementById('relogio').innerHTML = String(horas).padStart(2, '0') + ':' + String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0');
  return;
}
setInterval(horaAtt, 1000);