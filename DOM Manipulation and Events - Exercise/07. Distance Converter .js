function attachEventsListeners() {
    const inputElement = document.getElementById('inputDistance');
    const unitInputElements = document.querySelector('#inputUnits');
    const outputElement = document.getElementById('outputDistance');
    const unitOutputElement = document.querySelector('#outputUnits');
    const buttonElement = document.getElementById('convert');

    buttonElement.addEventListener('click', () => {
       const inputValue = inputElement.value;
       const unitInputValue = unitInputElements.options[unitInputElements.selectedIndex].value;
       let inputValueInMeters = 0;

       switch(unitInputValue){
           case 'km':
               inputValueInMeters = inputValue * 1000;
               break;
           case 'm':
               inputValueInMeters = inputValue;
               break;
           case 'cm':
               inputValueInMeters = inputValue * 0.01;
               break;
           case 'mm':
               inputValueInMeters = inputValue * 0.001;
               break;
           case 'mi':
               inputValueInMeters = inputValue * 1609.34;
               break;
           case 'yrd':
               inputValueInMeters = inputValue * 0.9144 ;
               break;
           case 'ft':
               inputValueInMeters = inputValue * 0.3048 ;
               break;
           case 'in':
               inputValueInMeters = inputValue * 0.0254 ;
               break;
       }

        const unitOutputValue = unitOutputElement.options[unitOutputElement.selectedIndex].value;
        let outputValueInMeters = 0;

        switch(unitOutputValue){
            case 'km':
                outputValueInMeters = inputValueInMeters / 1000;
                break;
            case 'm':
                outputValueInMeters = inputValueInMeters;
                break;
            case 'cm':
                outputValueInMeters = inputValueInMeters / 0.01;
                break;
            case 'mm':
                outputValueInMeters = inputValueInMeters / 0.001;
                break;
            case 'mi':
                outputValueInMeters = inputValueInMeters / 1609.34;
                break;
            case 'yrd':
                outputValueInMeters = inputValueInMeters / 0.9144 ;
                break;
            case 'ft':
                outputValueInMeters = inputValueInMeters / 0.3048 ;
                break;
            case 'in':
                outputValueInMeters = inputValueInMeters / 0.0254 ;
                break;
        }

        outputElement.value = outputValueInMeters;
    });

}