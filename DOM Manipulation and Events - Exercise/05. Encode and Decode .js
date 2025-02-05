function encodeAndDecodeMessages() {
    const textArea1 = document.querySelector('div:nth-child(1) textarea');
    const textArea2 = document.querySelector('div:nth-child(2) textarea');

    const button1 = document.querySelector('div:nth-child(1) button');
    const button2 = document.querySelector('div:nth-child(2) button');

    button1.addEventListener('click', () => {
        let scriptedAsciiArray = textArea1.value.split('');
        scriptedAsciiArray = scriptedAsciiArray.map(x => x.charCodeAt(0) + 1);
        textArea2.value = String.fromCharCode(...scriptedAsciiArray);
        textArea1.value = '';
    });

    button2.addEventListener('click', () => {
        let scriptedAsciiArray = textArea2.value.split('');
        scriptedAsciiArray = scriptedAsciiArray.map(x => x.charCodeAt(0) - 1);
        textArea2.value = String.fromCharCode(...scriptedAsciiArray);
    })
}