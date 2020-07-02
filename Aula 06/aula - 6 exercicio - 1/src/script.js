alert ( "Qual mês é o numero que vc usou!");
let numero = prompt( "Entre com o numero de 1 a 12" );



if ( numero == 1 ) { mes = ' O Mês é janeiro' }
if ( numero == 2 ) { mes = ' O Mês é fevereiro' }
if ( numero == 3 ) { mes = ' O Mês é março' }
if ( numero == 4 ) { mes = ' O Mês é abril' }
if ( numero == 5 ) { mes = ' O Mês é maio' }
if ( numero == 6 ) { mes = ' O Mês é junho' }
if ( numero == 7 ) { mes = ' O Mês é Julho o melhor mês' }
if ( numero == 8 ) { mes = ' O Mês é agosto' }
if ( numero == 9 ) { mes = ' O Mês é Semtembro' }
if ( numero == 10 ) { mes = ' O Mês é Outubro'  }
if ( numero == 11 ) { mes = ' O Mês é Novembro' }
if ( numero == 12 ) { mes = ' O Mês é Dezembro' }
if ( numero < 1 || numero > 12 ) { mes = 'Não existe mês com este numero cara!'}

tagmes.innerHTML = mes;