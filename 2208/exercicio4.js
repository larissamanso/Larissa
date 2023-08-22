let salario = 9.857;
let aluguel = 2.545;
let contas = 1.987;
let extras = 2.522;
 let saldo = salario - (aluguel + contas + extras);
 
 console.log("Seu salário é:", salario);
 console.log("Você paga", aluguel, "de aluguel,", contas, "de contas e tem", extras, "de gastos extras");
 console.log("Seu saldo disponível é:", saldo.toFixed(3));