function colorize() {
    const evenTownElements = document
        .querySelectorAll('tr:nth-child(even)');
    for(let item of evenTownElements){
        item.style.backgroundColor = 'Teal';
    }
}