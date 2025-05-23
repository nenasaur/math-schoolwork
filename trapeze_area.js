//calculadora de área de um trapézio 
//                        Ian Souza Molina

/*Antes de tudo , é necessário saber a equação para se descobrir a área de trapézio.
área de trapézio = base maior somada com a base menor dividida por dois e multiplicada 
pela altura do trapézio, ou seja , (Base maior + base menor)/2*altura */

// significado das variáveis:
//h = altura             
//B = base maior         
//b = base menor 

//------------------------------------------------------------------------------------
// de definição dos valores
const B= parseFloat(prompt(" base maior "));
const b= parseFloat(prompt("base menor "));
const h = parseFloat(prompt("altura "));
//-----------------------------------------------------------------------------------
v=(B+b)/2
a= v*h

alert("A área do trapézio é:"+ a);



//atualizado em 15/11/2024 às 14:55h
