function updateResults() {
    const temperature = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unitInput").value;

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
      celsius = temperature;
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
      fahrenheit = temperature;
      celsius = (temperature - 32) * 5/9;
      kelvin = (temperature - 32) * 5/9 + 273.15;
    } else {
      kelvin = temperature;
      celsius = temperature - 273.15;
      fahrenheit = (temperature - 273.15) * 9/5 + 32;
    }

    document.getElementById("celsiusOutput").value = celsius.toFixed(2);
    document.getElementById("fahrenheitOutput").value = fahrenheit.toFixed(2);
    document.getElementById("kelvinOutput").value = kelvin.toFixed(2);

    updateBackground(temperature);
  }

  function updateBackground(temperature) {
    if (temperature < 10) {
      document.body.style.backgroundColor = "blue";
    } else if (temperature > 30) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "yellow";
    }
  }

  function showAttribution() {
    window.open("https://mundoeducacao.uol.com.br/fisica/escalas-termometricas.htm", "_blank");
  }