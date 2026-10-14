let number1 = Number(prompt("digite seu 1 numero:"));
let number2 = Number(prompt("digite seu 2 numero:"));
let operacao = prompt("digite a operação:\n[+]\n[-]\n[/]\n[*]");

if (operacao == "+") {
    alert(number1 + number2);
}
if (operacao == "-") {
    alert(number1 - number2);
}
if (operacao == "/") {
    alert(number1 / number2);
}
if (operacao == "*") {
    alert(number1 * number2);
}
