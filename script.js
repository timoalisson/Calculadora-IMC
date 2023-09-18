var peso;
var altura;
var imc;
var resultado;


function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');
    if (imc < 17) {

        resultado.innerHTML = '<br/> Seu resulado foi :' + imc.toFixed(2) + '<br/> Cuidado voce esta muito abaixo do peso!'
    } else if (imc > 17 && imc <= 18.49) {

        resultado.innerHTML = '<br/> Seu resulado foi :' + imc.toFixed(2) + '<br/> voce esta abaixo do peso!'
    } else if (imc >= 18.5 && imc < 24.99) {

        resultado.innerHTML = '<br/> Seu resulado foi :' + imc.toFixed(2) + '<br/> Voce esta no peso Ideal!'
    } else if (imc > 25 && imc <= 29.99) {

        resultado.innerHTML = '<br/> Seu resultado foi :' + imc.toFixed(2) + '<br/> voce esta acima do peso!'
    }
    else if (imc >= 30) {

        resultado.innerHTML = '<br/> Seu resulado foi :' + imc.toFixed(2) + '<br/> Voce esta muito acima do Peso!'
    }
    document.getElementById('peso').value ='';
    document.getElementById('altura').value =''; 
}
