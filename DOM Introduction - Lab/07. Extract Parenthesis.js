function extract(content) {
    const text = document.getElementById(content).textContent;
    const regExp = new RegExp('(?<=\\().+?(?=\\))', 'g');

    const wordsInBrackets = [...text.matchAll(regExp)];
    return wordsInBrackets.join('; ');
}