PrimeiraOlimpiada = 1896;
AnoAtual = prompt ("Em que anos estamos?");
NumeroOlimpiadas = Math.round((AnoAtual-PrimeiraOlimpiada) / 4);
TagNumeroOlimpiadas.innerHTML = "O numero de olmpiadas que já aconteceu foi: " + NumeroOlimpiadas;
console.log(NumeroOlimpiadas);