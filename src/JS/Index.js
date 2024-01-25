function criptText(){
    var noMessage = document.getElementById('noMessage')
    var message = document.getElementById('message')
    var inText = document.getElementById('inText').value
    var varText = document.getElementById('varText')

    var criptText = inText.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat')

    if(noMessage.hasAttribute){
        noMessage.setAttribute('class','d-none')
        message.removeAttribute('class')
    }
    
    varText.innerHTML = criptText

}

function deCriptText(){
    var noMessage = document.getElementById('noMessage')
    var message = document.getElementById('message')
    var inText = document.getElementById('inText').value
    var varText = document.getElementById('varText')

    var decriptText = inText.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u')

    if(noMessage.hasAttribute){
        noMessage.setAttribute('class','d-none')
        message.removeAttribute('class')
    }
    
    varText.innerHTML = decriptText


}

function copyText(){
    varText = document.getElementById('varText').innerHTML
    navigator.clipboard.writeText(varText)

}