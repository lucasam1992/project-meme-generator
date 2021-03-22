function textoDigitado(){
const pegarTagTexto = document.querySelector('#text-input');
const escreverTagTexto = document.querySelector('#meme-text');

pegarTagTexto.addEventListener('input', function(){

escreverTagTexto.innerText = pegarTagTexto.value;
});
}


textoDigitado();

//https://www.javascripture.com/FileReader

function uploadImagem(event){
  const uploaded = document.getElementById('meme-insert');
  uploaded.addEventListener('change', function (event) {
    console.log(uploaded.files);
    const reader = new FileReader();
    reader.onload = function () {
      const image = document.getElementById('meme-image');
      image.src = reader.result
    }
    reader.readAsDataURL(uploaded.files[0]);
  })
}

uploadImagem();

