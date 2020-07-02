Nome = prompt("Nome Completo");
DataNasc = prompt("Data que você nasceu:\n Exemplo: dd/mm/aaaa");
TemCondicao = confirm("Você tem problema:\n Exemplo: Sim ou Não");

if(TemCondicao) { EstadoSaude= "Sim" }
if(TemCondicao == false){EstadoSaude= "Nao"}

tagh1.innerHTML= "Nome:" + Nome;
taglist.innerHTML=`
  <li>Data de nascimento: ${DataNasc}</li>
  <li>Idade: ${23} anos</li>
  <li>Tem condição pré-existente: ${EstadoSaude}</li>
  <li>precisa de acompanhamento médico</li>
`