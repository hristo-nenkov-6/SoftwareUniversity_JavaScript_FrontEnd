function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    if(buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }else{
        buttonElement.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}