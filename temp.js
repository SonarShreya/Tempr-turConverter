document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const resultText = document.getElementById("result-text");
    const convertButton = document.getElementById("convert");
    const unitToggle = document.getElementById("unit-toggle");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        let result;

        if (unitToggle.checked) {
            // Convert to Fahrenheit
            result = (temperature * 9/5) + 32;
            resultText.textContent = `${temperature.toFixed(2)}°C is ${result.toFixed(2)}°F`;
        } else {
            // Convert to Celsius
            result = (temperature - 32) * 5/9;
            resultText.textContent = `${temperature.toFixed(2)}°F is ${result.toFixed(2)}°C`;
        }
    });
});
