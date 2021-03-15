function textoDigitado(){
const pegarTagTexto = document.querySelector('#text-input');
const escreverTagTexto = document.querySelector('#meme-text');

pegarTagTexto.addEventListener('input', function(){

escreverTagTexto.innerText = pegarTagTexto.value;
});
}

textoDigitado();
