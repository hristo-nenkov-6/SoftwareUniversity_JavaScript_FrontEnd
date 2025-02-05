function attachEventsListeners() {
    const convertButtonElements = document.querySelectorAll('input[type=button]');
    Array.from(convertButtonElements).forEach(button => button.addEventListener('click', () => {
        const valueOfSection = Number(button.parentElement.querySelector('input[type=text]').value);
        const type = button.parentElement.querySelector('label').textContent.trim();

        let initialValue = 0;
        switch(type){
            case 'Days:':
                initialValue = valueOfSection;
                break;

            case 'Hours:':
                initialValue = valueOfSection / 24;
                break;

            case 'Minutes:':
                initialValue = valueOfSection / 24 / 60;
                break;

            case 'Seconds:':
                initialValue = valueOfSection / 24 / 60 / 60;
                break;
        }

        document.getElementById('days').value = initialValue.toString();
        document.getElementById('hours').value = (initialValue * 24).toString();
        document.getElementById('minutes').value = (initialValue * 24 * 60).toString();
        document.getElementById('seconds').value = (initialValue * 24 * 60 * 60).toString();
    }))
}