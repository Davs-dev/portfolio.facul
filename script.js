function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   arrTexto.forEach((ativaLetra, i) => {
    setTimeout(() => {
elemento.innerHTML += ativaLetra;
    }, 75 * i);
   });
}



const titulo = document.querySelector('.efeito_js');
ativaLetra(titulo);