alert ("Calculadora do IMC, Bora!")
let peso = prompt ( "Entre com o seu peso: \n exemplo: 142" )
let altura = prompt ( "Entre com sua altura: \n exempo: 1.94" )


IMC = peso / altura * altura


if ( IMC < 17) { IMCd = ' MUITO ABAIXO DO PESO ' }
if ( IMC > 17 && IMC < 18.49) { IMCd = ' ABAIXO DO PESO ' }
if ( IMC > 18.5 && IMC < 24.99 ) { IMCd = ' PESO NORMAL ' }
if ( IMC > 25 && IMC < 29.99 ) { IMCd = ' ACIMA DO PESO ' }
if ( IMC > 30 && IMC < 34.99 ) { IMCd = ' OBESIDADE I ' }
if ( IMC > 35 && IMC < 39.99 ) { IMCd = ' OBESIDADE II ' }

tagIMCd.innerHTML = IMCd;