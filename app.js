alert ('Boas vindas ao jogo do número secreto')
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30')

//enquanto
while
// se o chute for igual ao numero secreto, executa uma funçao
if (chute == numeroSecreto) {
    alert(`Isso ai, Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute} `);
    }
}
