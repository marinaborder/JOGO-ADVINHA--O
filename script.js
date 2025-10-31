const chuteInput = document.getElementById('chute-input');
const chutarBotao = document.getElementById('botao-chutar');
const message = document.getElementById('message');
const restaurarBotao = document.getElementById('botao-restaurar');
const dica = document.getElementById('dica');

let numeroSecreto;
let tentativasRestantes;
let fimJogo = false;

function geradorNumero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

numeroSecreto = geradorNumero(1, 100);
console.log(numeroSecreto);

let tentativas = 0
let limiteTentativas = 2

function verificaNumero() {
  tentativas++;
  document.getElementById('tentativas').innerText = 'Tentativas restantes: ' + (limiteTentativas - tentativas);
  let palpite = Number(chuteInput.value);
  console.log(palpite === numeroSecreto);

  if (tentativas > limiteTentativas) {
    console.log(tentativas)
    alert('Suas tentativas acabaram!');
    window.location.reload(true)
  }

  if(palpite === numeroSecreto){
    alert ("Parabéns!");
    window.location.reload(true)
    } else {
    message.textContent = "Numero errado, tente novamente";
    chuteInput.value = '';
  }

  if(palpite < numeroSecreto){
   dica.textContent = "O número secreto é maior";
  } else {
    dica.textContent = "O número secreto é menor";
  }
}






/*1.Pegue o que o usuário digitou.*/

/*2.Se o que ele digitou não for um número válido (1 a 100), mostre um erro e pare.

3.SE o número digitado for igual ao número secreto:

4.Diga que ele ganhou.

5.Termine o jogo.

6.SE NÃO: (ele errou)

7.Diminua o contador de tentativas em 1.

8.SE o número for menor que o secreto, diga "O número é maior".

9.SE NÃO (o número é maior que o secreto), diga "O número é menor".

10.SE as tentativas acabaram, diga que ele perdeu e termine o jogo.
*/

