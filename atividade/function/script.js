/*
function gerarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`);
  }
}

gerarTabuada(1);
gerarTabuada(2);
gerarTabuada(3);
gerarTabuada(4);
gerarTabuada(5);
gerarTabuada(6);
gerarTabuada(7);
gerarTabuada(8);
gerarTabuada(9);
gerarTabuada(10)

*/

let peso = prompt( "digite seu peso (kg): " ) 
let altura = prompt( "digite sua altura (m): " ) 

let resultado = calcularIMC(peso, altura) 
// Chama a classificação passando o resultado do IMC e guarda o texto na variável
let classificacao = classificarIMC(resultado) 

// Mostra o IMC e a classificação na mesma mensagem
alert("Seu IMC é: " + resultado + "\nClassificação: " + classificacao) 

function calcularIMC( peso, altura) { 
    return peso / (altura * altura) 
} 

function classificarIMC(imc) { 
    if (imc < 18.5) {
        return "se levantar os braço voa";
    } else if (imc >= 18.5 && imc < 25) {
        return "ta gg";
    } else if (imc >= 25 && imc < 30) {
        return "tá gordinho";
    } else {
        return "quase na cabe não tela";
    }
}

