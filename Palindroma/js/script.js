const userWord = prompt("dimmi una parola");
const userWordArray = userWord.split("");

console.log(userWordArray);
checkIfPalindrome(userWordArray);

function checkIfPalindrome(arrayToCheck) {
  let isPalindrome = false;
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck === arrayToCheck.reverse()) {
      isPalindrome = true;
    }
  }
  console.log(isPalindrome);
  return isPalindrome;
}
