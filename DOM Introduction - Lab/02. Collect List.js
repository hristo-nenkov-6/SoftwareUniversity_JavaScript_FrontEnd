function extractText() {
    let itemNodes =
        document.querySelectorAll('ul#items li');
    let textArea = document.getElementById('result');
    for(let item of itemNodes){
        textArea.value += item.textContent + '\n';
    }
}