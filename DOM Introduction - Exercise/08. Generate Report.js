function generateReport() {
    const checkBoxesCollection = document.querySelectorAll('tr th input');
    let arrayObjectOfChecked = [];
    let checkedTypes = [];
    let checkedTypesIndexes = [];
    for(let i = 0; i < checkBoxesCollection.length; i++){
        if(checkBoxesCollection[i].checked){
            checkedTypes.push(document.querySelector(`thead tr th:nth-child(${i + 1})`).textContent.trim());
            checkedTypesIndexes.push(i);
        }
    }

    const allData = document.querySelectorAll('tr');
    for(let j = 0; j < allData.length - 1; j++){
        let currentObject = {};
        for(let i = 0; i < checkedTypes.length; i++){
            currentObject[checkedTypes[i].toLowerCase()] = document.querySelector(`tr:nth-child(${j + 1}) td:nth-child(${checkedTypesIndexes[i] + 1})`).innerText;
        }
        arrayObjectOfChecked.push(currentObject);
    }

    const outputElement = document.getElementById('output');
    outputElement.value = JSON.stringify(arrayObjectOfChecked, null, 2);
}