function addItem() {
    const newItemElement = document.getElementById('newItemText');
    const listItems = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newItemElement.value));
    listItems.appendChild(newLi);

    newItemElement.value = '';
}