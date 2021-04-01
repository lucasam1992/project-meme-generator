function textoDigitado() {
  const pegarTagTexto = document.querySelector('#text-input');
  const escreverTagTexto = document.querySelector('#meme-text');

pegarTagTexto.addEventListener('input', function(){

  escreverTagTexto.innerText = pegarTagTexto.value;
});
}

textoDigitado();

//https://www.javascripture.com/FileReader
//https://www.codegrepper.com/code-examples/html/input+type=%22file%22+and+display+image

function uploadImagem(event) {
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

function botoesEstilizaContainer(){
  const pegaAgua = document.querySelector('#water');
  const pegaFogo = document.querySelector('#fire');
  const pegaTerra = document.querySelector('#earth');
  const pegaContainer = document.querySelector('#meme-image-container');

  pegaAgua.addEventListener('click', function(){
    pegaContainer.style.border = '5px double rgb(0, 0, 255)'; 
  });

  pegaFogo.addEventListener('click', function(){
    pegaContainer.style.border = '3px dashed rgb(255, 0, 0)';
  });

  pegaTerra.addEventListener('click', function(){
    pegaContainer.style.border = '6px groove rgb(0, 128, 0)';
  });
}

botoesEstilizaContainer();

function utilizaMemeDisponivel() {
  const pegaMeme1 = document.querySelector('#meme-1');
  const pegaMeme2 = document.querySelector('#meme-2');
  const pegaMeme3 = document.querySelector('#meme-3');
  const pegaMeme4 = document.querySelector('#meme-4');
  const pegaContainer = document.querySelector('#meme-image');

  pegaMeme1.addEventListener('click', function(event){
    pegaContainer.src = event.target.src;
  });

  pegaMeme2.addEventListener('click', function(event){
    pegaContainer.src = event.target.src;
  });

  pegaMeme3.addEventListener('click', function(event){
    pegaContainer.src = event.target.src;
  });

  pegaMeme4.addEventListener('click', function(event){
    pegaContainer.src = event.target.src;
  });
}

utilizaMemeDisponivel();

















