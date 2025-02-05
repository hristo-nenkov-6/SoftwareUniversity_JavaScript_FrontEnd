function validate() {
    const emailElement = document.getElementById('email');
    const re = new RegExp('^[a-z]+@[a-z]+\.[a-z]+$');

    emailElement.addEventListener("change", (event) => {
        if(!re.test(emailElement.value)){
            emailElement.classList.add('error');
        }else{
            emailElement.classList.remove('error');
        }
    })
}