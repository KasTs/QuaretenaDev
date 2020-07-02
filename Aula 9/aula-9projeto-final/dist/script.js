function calcular(){
  
  distanciaKm = inputDistancia.value; 
  tempoMin = inputTempo.value;
  valorCorrida = 2 + distanciaKm * 1.4 + tempoMin * 0.26;
 
  botaoCalcular.innerHTML = ('Deu: R$' + mudaMoeda(valorCorrida));
}

function mudaMoeda(valor){
  return valor.toFixed(2).replace(".",",");
}