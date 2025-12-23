let num1 = parseInt(prompt("Ingrese un numero:"));

if (num1 % 2 === 0) {
  document.writeln(num1 + " Es un número Dividible en 2.");
} else if (num1 % 3 === 0) {
  document.writeln(num1 + " Es un número Dividible en 3.");
} else if (num1 % 5 === 0) {
  document.writeln(num1 + " Es un número Dividible en 5.");
} else if (num1 % 7 === 0) {
  document.writeln(num1 + " Es un número Dividible en 7.");
} else {
  document.writeln(num1 + " No es un número Dividible en 2, 3, 5 o 7.");
}
