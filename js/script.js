function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var temperature = parseFloat(temperatureInput.value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
  
    // Reset previous errors
    document.getElementById("temperatureError").textContent = "";
  
    // Validate temperature input
    var temperaturePattern = /^[0-9]+(\.[0-9]+)?$/;
    if (!temperaturePattern.test(temperatureInput.value)) {
        document.getElementById("temperatureError").textContent = "Please enter a valid number.";
        return;
    }
  
    var result;
    switch (fromUnit) {
        case "celsius":
            switch (toUnit) {
                case "celsius":
                    result = temperature;
                    resultElement.textContent = temperature + "°C = " + result.toFixed(2) + "°C";
                    break;
                case "reamur":
                    result = temperature * 4/5;
                    resultElement.textContent = temperature + "°C = " + temperature + " × 4/5 = " + result.toFixed(2) + "°R";
                    break;
                case "fahrenheit":
                    result = (temperature * 9/5) + 32;
                    resultElement.textContent = temperature + "°C = (" + temperature + " × 9/5) + 32 = " + result.toFixed(2) + "°F";
                    break;
                case "kelvin":
                    result = temperature + 273.15;
                    resultElement.textContent = temperature + "°C = " + temperature + " + 273.15 = " + result.toFixed(2) + " K";
                    break;
            }
            break;
        case "reamur":
            switch (toUnit) {
                case "celsius":
                    result = temperature * 5/4;
                    resultElement.textContent = temperature + "°R = " + temperature + " × 5/4 = " + result.toFixed(2) + "°C";
                    break;
                case "reamur":
                    result = temperature;
                    resultElement.textContent = temperature + "°R = " + result.toFixed(2) + "°R";
                    break;
                case "fahrenheit":
                    result = (temperature * 9/4) + 32;
                    resultElement.textContent = temperature + "°R = (" + temperature + " × 9/4) + 32 = " + result.toFixed(2) + "°F";
                    break;
                case "kelvin":
                    result = (temperature * 5/4) + 273.15;
                    resultElement.textContent = temperature + "°R = (" + temperature + " × 5/4) + 273.15 = " + result.toFixed(2) + " K";
                    break;
            }
            break;
        case "fahrenheit":
            switch (toUnit) {
                case "celsius":
                    result = (temperature - 32) * 5/9;
                    resultElement.textContent = temperature + "°F = (" + temperature + " - 32) × 5/9 = " + result.toFixed(2) + "°C";
                    break;
                case "reamur":
                    result = (temperature - 32) * 4/9;
                    resultElement.textContent = temperature + "°F = (" + temperature + " - 32) × 4/9 = " + result.toFixed(2) + "°R";
                    break;
                case "fahrenheit":
                    result = temperature;
                    resultElement.textContent = temperature + "°F = " + result.toFixed(2) + "°F";
                    break;
                case "kelvin":
                    result = (temperature - 32) * 5/9 + 273.15;
                    resultElement.textContent = temperature + "°F = (" + temperature + " - 32) × 5/9 + 273.15 = " + result.toFixed(2) + " K";
                    break;
            }
            break;
        case "kelvin":
            switch (toUnit) {
                case "celsius":
                    result = temperature - 273.15;
                    resultElement.textContent = temperature + " K = " + temperature + " - 273.15 = " + result.toFixed(2) + "°C";
                    break;
                case "reamur":
                    result = (temperature - 273.15) * 4/5;
                    resultElement.textContent = temperature + " K = (" + temperature + " - 273.15) × 4/5 = " + result.toFixed(2) + "°R";
                    break;
                case "fahrenheit":
                    result = (temperature - 273.15) * 9/5 + 32;
                    resultElement.textContent = temperature + " K = (" + temperature + " - 273.15) × 9/5 + 32 = " + result.toFixed(2) + "°F";
                    break;
                case "kelvin":
                    result = temperature;
                    resultElement.textContent = temperature + " K = " + result.toFixed(2) + " K";
                    break;
            }
            break;
    }
}