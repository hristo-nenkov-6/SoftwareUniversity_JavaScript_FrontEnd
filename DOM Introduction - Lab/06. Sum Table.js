function sumTable() {
    const collectionOfProductElements =
        document.querySelectorAll('tr:not(:first-child) td:not(#sum):last-child');

    let valueSum = 0;
    for (let cost of collectionOfProductElements){
        valueSum += Number(cost.textContent);
    }

    document.getElementById('sum').textContent = valueSum.toString();
}