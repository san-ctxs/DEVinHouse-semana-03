const dataAtual = new Date();
window.onload = estacaoDoAno();
function estacaoDoAno() {
  veraoInicio = new Date();
  veraoInicio.setDate(22);
  veraoInicio.setMonth(11)
  veraoFim = new Date();
  veraoFim.setDate(21);
  veraoFim.setMonth(2);
  outonoInicio = new Date();
  outonoInicio.setDate(22);
  outonoInicio.setMonth(2);
  outonoFim = new Date();
  outonoFim.setDate(21);
  outonoFim.setMonth(5);
  invernoInicio = new Date();
  invernoInicio.setDate(22);
  invernoInicio.setMonth(5);
  invernoFim = new Date();
  invernoFim.setDate(21);
  invernoFim.setMonth(8);
  primaveraInicio = new Date();
  primaveraInicio.setDate(22);
  primaveraInicio.setMonth(8);
  primaveraFim = new Date();
  primaveraFim.setDate(21);
  primaveraFim.setMonth(11);
  if (dataAtual >= veraoInicio || dataAtual <= veraoFim) {
    document.getElementById('imgEstacao').src = 'verao.jpg';
    document.getElementById('titleEstacao').innerHTML = 'VERÃO';
    document.getElementById('titleEstacao').style.color = 'red';
    document.getElementById('fundo').style.backgroundColor = 'lightcoral';
  } else if (dataAtual >= outonoInicio && dataAtual <= outonoFim) {
    document.getElementById('imgEstacao').src = 'outono.webp';
    document.getElementById('titleEstacao').innerHTML = 'OUTONO';
    document.getElementById('titleEstacao').style.color = 'brown';
    document.getElementById('fundo').style.backgroundColor = 'burlywood';
  } else if (dataAtual >= invernoInicio && dataAtual <= invernoFim) {
    document.getElementById('imgEstacao').src = 'inverno.webp';
    document.getElementById('titleEstacao').innerHTML = 'INVERNO';
    document.getElementById('titleEstacao').style.color = 'darkblue';
    document.getElementById('fundo').style.backgroundColor = 'cyan';
  } else if (dataAtual >= primaveraInicio && dataAtual <= primaveraFim) {
    document.getElementById('imgEstacao').src = 'primavera.webp';
    document.getElementById('titleEstacao').innerHTML = 'PRIMAVERA';
    document.getElementById('titleEstacao').style.color = 'darkgreen';
    document.getElementById('fundo').style.backgroundColor = 'lime';
  }
  return;
}