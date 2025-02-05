function addItem() {
    const selectList = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const addButton = document.querySelector('input[type=button]');

        let option = document.createElement('option');
        option.textContent = text.value;
        option.value = value.value;
        selectList.appendChild(option);

        text.value = '';
        value.value = '';
}