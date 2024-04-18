alert ('Boas vindas ao jogo do número secreto')
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30')

// se o chute for igual ao numero secreto, executa uma funçao
if (chute == numeroSecreto) {
    alert('Isso ai, Você descobriu o número secreto (29)');
} else {
    alert('Você errou :(')
}
