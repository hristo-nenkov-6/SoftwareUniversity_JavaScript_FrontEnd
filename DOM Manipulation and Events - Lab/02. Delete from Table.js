function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const tableEmailElements = document.querySelectorAll('#customers tbody tr td:nth-child(2)');
    const resultElement = document.getElementById('result');

    let wantedElement = Array.from(tableEmailElements).find(element => element.textContent.includes(inputEmailElement.value));
    if(wantedElement){
        wantedElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    }else{
        resultElement.textContent = 'Not found.';
    }
}