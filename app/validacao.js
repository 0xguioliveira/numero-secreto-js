function verificaSeOChutePossuiUmValorValido(chute){
    const numero =  +chute
    //somando com o chute para transformar a entrada de voz em Inteiro.

    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `        
        }
        return
        //com o retorn, essa função não será mais chamada.
    }
    if(numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor iválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }
    if(numero === numeroSecreto){
        //para redesenhar a tela
        document.body.innerHTML =`
        <h4>Você acertou!</h4>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
    //Se não for um número ("isNaN = is not a number") 
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

//para recarregar a página e jogar novamente
document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})