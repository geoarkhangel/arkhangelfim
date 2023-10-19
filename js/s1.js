const minhaImagem = document.getElementById("minha-imagem");
const imagens = ["/images/smashbg.png", "/images/smashbg2.png", "/images/smashbg3.png", "/images/smashbg2.png","/images/smashbg.png"];
let i = 0;
function trocarImagem() {
minhaImagem.src = imagens[i];
i++;
if (i >= imagens.length) {
  i = 0;
}
}
setInterval(trocarImagem, 500);