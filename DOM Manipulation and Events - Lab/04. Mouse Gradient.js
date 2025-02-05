function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener("mousemove", (event) => {
       resultElement.textContent = `${Math.floor(event.offsetX / 3)}%`;
    });
}