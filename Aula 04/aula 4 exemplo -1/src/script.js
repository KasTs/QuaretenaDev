
//CustoTransporte= 2 + DistandiaPercorrida * 1.4 + Minutos * 0.26  
// isso aqui é a formula do valor da viagem

DistanciaKm=20
TempoMin=60
ValorCorrida=2+DistanciaKm*1.4+TempoMin*0.26
alert ('sua corrida deu: R$' + ValorCorrida.toFixed(2))