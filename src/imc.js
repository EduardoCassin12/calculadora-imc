let peso = 63
let altura = 1.60

let imc = peso / (altura * altura)

console.log(`Seu IMC é: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso")
} else if (imc < 25) {
    console.log("Classificação: Peso normal")
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso")
} else if (imc < 35) {
    console.log("Classificação: Obesidade Grau I")
} else if (imc < 40) {
    console.log("Classificação: Obesidade Grau II")
} else {
    console.log("Classificação: Obesidade Grau III")
}
