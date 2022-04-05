const areaClivavel = document.getElementById("clicavel");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");

let contador = {
    contador1: 0,
    contador2: 0,
}

resultado1.innerHTML = `${contador.contador1}`
resultado2.innerHTML = `${contador.contador2}`

const incremento = (event) => {
        contador[event.target.id]++;
        resultado1.innerHTML = `${contador.contador1}`
        resultado2.innerHTML = `${contador.contador2}`
}

const limpar = (event) => {
        contador[event.target.id.split("_")[1]] = 0;
        resultado1.innerHTML = `${contador.contador1}`
        resultado2.innerHTML = `${contador.contador2}`
}