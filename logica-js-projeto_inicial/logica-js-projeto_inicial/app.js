alert('Boas vindas ao jogo no número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual a Número Secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    }
    else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{ 
            alert(`O número secreto é maior que ${chute}`);
        }
        // igual à tentativas = tentativas + 1;
        tentativas++;    
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai, você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//    alert(`Isso ai, você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
//}else {
//    alert(`Isso ai, você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
//}
