const itemList = []
function addToList() {
  const listResult = document.querySelector('#addList').value;
  if (listResult.length == 0) {
    alert('Sua caixa de texto está vazia.');
  } else {
    itemList.push('<option>' + listResult + '</option>');
    document.querySelector('#list').innerHTML = itemList;
    document.querySelector('#addList').value = ''
  }
  return;
}
function saveToStorage() {
  localStorage.setItem('savedlist', JSON.stringify(itemList));
  return;
}
function loadFromStorage() {
  savedList = JSON.parse(localStorage.getItem('savedlist'));
  if (savedList == null) {
    alert('Não há listas salvas.')
  } else {
    itemList.push(savedList)
    document.querySelector('#list').innerHTML = itemList;
  }
  return;
}