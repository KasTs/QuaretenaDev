valorCelsius = inputCelsios.value;
valorFahrenheit = inputfahrenheit.value;

function calcularCF(){
  botaoCelsius.innerHTML = cFahrenheit(valorCelsius)'Fº'
}

function calcularFC{
  botaoFahrenheit.innerHTML = fCelsius(valorFahrenheit)'Cº'
}

function fCelsius(fValor){
  return temperaturaCelsius = (fValor-32)/1.8;
}

function cFahrenheit(cValor){
  auxC = (cValor/5) * 9;
  return temperaturaFahrenheit = auxC + 32;
}