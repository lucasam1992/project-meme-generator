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