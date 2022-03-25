const inputTaxa = document.getElementById("taxa");
const inputDolar = document.getElementById("dolarReal");
const inputReal = document.getElementById("realDolar");

const totalReal = document.getElementById("resultadoReal");
const totalDolar = document.getElementById("resultadoDolar");

const botaoTaxa = document.getElementById("botaoTaxa");
const botaoLimpaTaxa = document.getElementById("botaoLimpaTaxa");
const botaoReal = document.getElementById("botaoReal");
const botaoDolar = document.getElementById("botaoDolar");


var total;
var taxa;

botaoReal.disabled = true;
botaoDolar.disabled = true;
inputDolar.disabled = true;
inputReal.disabled = true;
botaoLimpaTaxa.disabled = true;

const obterTaxa = () => {
    if(inputTaxa.value === "") {
        return alert("Preencha a taxa de conversão para continuar!");
    }
    taxa = inputTaxa.value;
    inputTaxa.disabled = true;
    botaoTaxa.disabled = true;
    botaoLimpaTaxa.disabled = false;
    botaoReal.disabled = false;
    botaoDolar.disabled = false;
    inputDolar.disabled = false;
    inputReal.disabled = false;
    console.log(taxa);
}

const limpaInput = () => {
    inputTaxa.value = "";
    inputDolar.value = "";
    inputReal.value = "";
    totalReal.innerHTML = ``;
    totalDolar.innerHTML = ``;
    inputTaxa.disabled = false;
    botaoTaxa.disabled = false;
    botaoLimpaTaxa.disabled = true;
    botaoReal.disabled = true;
    botaoDolar.disabled = true;
    inputDolar.disabled = true;
    inputReal.disabled = true;
}

const dolarParaReal = () => {
    if(inputDolar.value === "") {
        return alert("Preencha o campo com o valor em dólares para continuar!");
    }
    total = taxa * inputDolar.value;
    totalReal.innerHTML = `<h3>O valor em reais é: <span>R$${total.toFixed(2)}</span><h3>`
}

const realParaDolar = () => {
    if(inputReal.value === "") {
        return alert("Preencha o campo com o valor em reais para continuar!");
    }
    total = inputReal.value / taxa;
    totalDolar.innerHTML = `<h3>O valor em dólares é: <span>$${total.toFixed(2)}</span><h3>`
}