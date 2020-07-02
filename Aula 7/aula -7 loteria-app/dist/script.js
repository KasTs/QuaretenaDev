alert ("Este é um app de celular! \nSeja bem vindo!")


function  ExecutaSorteio() {
  aleatorio = Math.round( Math.random() * 10 )
  console.log(aleatorio);
  NumeroSorte = prompt ('Tente seu numero da sorte, que seja de 1 a 10')
  
  while ( NumeroSorte < 1 || NumeroSorte > 10 || isNaN (NumeroSorte)){
    NumeroSorte = prompt ('Tente novamente, com algum numero de 1 a 10')
    
  }
  
  if ( NumeroSorte == aleatorio ) { paragrafoResultado.innerHTML = ' Você ganhou o Sorteio' }  
  if ( NumeroSorte != aleatorio ) { paragrafoResultado.innerHTML = ' Tente novamente' }

}