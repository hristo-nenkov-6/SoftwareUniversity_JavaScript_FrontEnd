function addItem() {
       const newItemElement = document.getElementById('newItemText');
       const listItems = document.getElementById('items');

       let newLi = document.createElement('li');
       newLi.appendChild(document.createTextNode(newItemElement.value));

       let newLiA = document.createElement('a');
       newLiA.href = '#';
       newLiA.textContent = '[Delete]';
       newLiA.addEventListener('click', (event) => {
           newLiA.parentElement.remove();
       });
    

       newLi.appendChild(newLiA);

       listItems.appendChild(newLi);

       newItemElement.value = '';
}