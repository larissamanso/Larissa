let valor = 10;
valor += 5; //Equivalente a: valor = valor + 5;
console.log(valor); //Resultado: 15

let texto = "Olá, mundo!";
console.log(texto.length); //Resultado: 12

texto = "JavaScript";
console.log(texto[0]); //Resultado: "J"
console.log(texto[4]); //Resultado: "S" 

let saudacao = "Olá";
let nome = "Maria";
let mensagem = saudacao + "," + nome + "!";
console.log(mensagem); //Resultado: "Olá, Maria!"

texto = "JavaScript";
console.log(texto.toUpperCase()); //Resultado: "JAVASCRIPT"
console.log(texto.toLowerXase()); //Resultado: "javascript"

texto = "Olá, mundo!";
let parte = texto.slice(5,9);
console.log(parte); //Resultado: "mun"