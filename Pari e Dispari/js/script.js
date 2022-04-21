// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("pari o dispari?");
const userNumber = parseInt(prompt("scegli un numero"));
console.log(userNumber);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const pcNumber = genRandomNumber(1, 5);
console.log(pcNumber);

function genRandomNumber(min, max) {
  const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return generatedNumber;
}
// Sommiamo i due numeri
const sum = userNumber + pcNumber;
console.log(sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const sumEvenOdd = evenOdd(sum);
function evenOdd(sum) {
  let result;
  if (sum % 2 === 0) {
    result = "pari";
  } else {
    result = "dispari";
    console.log(result);
  }
  return result;
}
// Dichiariamo chi ha vinto.
if (userChoice === sumEvenOdd) {
  console.log("hai vinto!");
} else {
  console.log("hai perso! ritenta");
}
