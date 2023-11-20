function converte() {
    var temCelsius = parseFloat(document.getElementById("Celsius").value);
    var tempKelvin;

    if (isNaN(temCelsius)) {
        alert("Por favor, insira um valor numérico para a temperatura em Celsius.");
        return;
    }

    tempKelvin = temCelsius + 273.15;
    
    document.getElementById("result").innerHTML = + tempKelvin.toFixed(2) + " Kelvin";

    cleanResult();
}

function cleanResult() {
    setTimeout(function () {
        document.getElementById("result").innerHTML = "";
    }, 3000);
}


function celsiusForm() {
    tempOne.style.display = "block";
    tempTwo.style.display = "none";
}

function fahnForm() {
    tempOne.style.display = "none";
    tempTwo.style.display = "block";
}
