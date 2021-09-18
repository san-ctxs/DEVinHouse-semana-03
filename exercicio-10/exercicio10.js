function calcPA() {
  let firstVal = parseInt(document.querySelector('#numOne').value);
  let root = parseInt(document.querySelector('#numTwo').value);
  if (isNaN(firstVal) == true || isNaN(root) == true) {
    alert('Um ou mais campos estão vazios ou não são números.');
  } else {
    result = [];
    result.push(firstVal);
    for (let i = 0; i < 9; i++) {
      result.push(root + result[i]);
    }
    document.querySelector('#resultFinal').innerHTML = 'O resultado é: ' + result + '.';
    return;
  }
}
function calcPG() {
  let firstVal = parseInt(document.querySelector('#numOne').value);
  let root = parseInt(document.querySelector('#numTwo').value);
  if (isNaN(firstVal) == true || isNaN(root) == true) {
    alert('Um ou mais campos estão vazios ou não são números.');
  } else {
    result = [];
    result.push(firstVal);
    for (let i = 0; i < 9; i++) {
      result.push(root * result[i]);
    }
    document.querySelector('#resultFinal').innerHTML = 'O resultado é: ' + result + '.';
    return;
  }
}