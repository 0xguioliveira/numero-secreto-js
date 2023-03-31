const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
    //posição de onde é armazenado o resultado da fala do usuário.
    chute = event.results[0][0].transcript 
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}
//para o reconhecimento de voz permancer funcionando enquanto não acerta.
recognition.addEventListener('end', () => {
    recognition.start()})