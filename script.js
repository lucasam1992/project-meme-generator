function textoDigitado(){
const pegarTagTexto = document.querySelector('#text-input');
const escreverTagTexto = document.querySelector('#meme-text');

pegarTagTexto.addEventListener('input', function(){

escreverTagTexto.innerText = pegarTagTexto.value;
});
}


textoDigitado();

//https://www.javascripture.com/FileReader
//https://www.codegrepper.com/code-examples/html/input+type=%22file%22+and+display+image

function uploadImagem(event){
  const uploaded = document.querySelector('#meme-insert');
  uploaded.addEventListener('change', function (event) {
   const reader = new FileReader();
   reader.onload = function () {
   const image = document.querySelector('#meme-image');
   image.src = reader.result
   }
   reader.readAsDataURL(uploaded.files[0]);
});
}

uploadImagem();

