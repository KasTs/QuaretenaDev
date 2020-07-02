function gerar() {
  botaoGerar.disabled = true
  
  nome = inputNome.value
  
  links = [
    'https://codepen.io/kasts/pen/vYNGRyM',
    'https://codepen.io/kasts/pen/oNjxwzQ',
    'https://codepen.io/kasts/details/OJyMdVB',
    'https://codepen.io/kasts/pen/mdePpmR',
    'https://codepen.io/kasts/pen/mdeeyvz'
  ]
  
  titulos = [
    'Desafio da Temperatura',
    'Desafio da Olimpíadas',
    'Desafio do botão do like',
    'Desafio do loteria app',
    'Desafio do IMC'
  ]
 
  contador = 0
  while(contador < 1000000) {
    contador = contador + 1
    htmlcertificado =           emitirCertificado(nome)     
  }
  
  
  listalinksHTML = ""
  contadorlinks = 0
  while(contadorlinks < 5) {
    listalinksHTML = listalinksHTML + `
      <li>
        ${titulos[contadorlinks]}:
        <a target="_blank" href="${links[contadorlinks]}">
            ${links[contadorlinks].replace('https://', '')}
        </a>
      </li>
    `
    
    contadorlinks = contadorlinks + 1
  }
 
  
  document.body.innerHTML = htmlcertificado + `
    <ol>
      ${listalinksHTML}
    </ol>
  `
  
  print()
}
