function converter() {
    var valorDolar = parseFloat(document.getElementById("valorDolar").value);
    var cotacao = parseFloat(document.getElementById("cotacao").value);

    if (isNaN(valorDolar) || isNaN(cotacao)) {
        alert("Por favor, insira valores numéricos para a quantia em dólar e a cotação do dólar.");
        return;
    }

    var resultado = valorDolar * cotacao;

    document.getElementById("resultado").innerHTML = "R$ " + resultado.toFixed(2);
}
