function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');
    for(let element of inputElements){
        element.addEventListener('focus', (event) => {
            element.parentElement.classList.add('focused');
        });
        element.addEventListener('blur', (event) => {
            element.parentElement.classList.remove('focused');
        });
    }
}