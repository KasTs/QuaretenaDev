alert("Aqui vc fica sabendo quando custou sua corrida!\n                    SEJA BEM VINDO!")
DistanciaPercorrida = prompt('Insira a Distancia Percorrida em KM: ') 
MinutosViagem = prompt('Insira o tempo gasto na viagem percorrida em Min: ')
CustoTransporte=2+DistanciaPercorrida*1.4+MinutosViagem*0.26  
document.write("valor: ", CustoTransporte.toFixed(2) ," reais que custou sua viagem.")
alert("Muito obrigado, Volte sempre!")

