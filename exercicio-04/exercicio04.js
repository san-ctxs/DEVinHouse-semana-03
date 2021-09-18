const date = new Date();
let horas = date.getHours();
let minutos = date.getMinutes();
document.getElementById('relogio').innerHTML = String(horas).padStart(2, '0') + ':' + String(minutos).padStart(2, '0');