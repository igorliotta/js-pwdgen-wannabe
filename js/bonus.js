// # Bonus

// - Inserire alla fine della password finale un numero random da 1 a 99:
//   - Dichiarare una nuova variabile j random nel quale verrà scelto in maniera randomica il numero.
function getRandomInt(max) {
    return Math.floor(Math.random() * 99);
  }

let numberRandom = Math.floor(Math.random() * 99);
 console.log(numberRandom);
// - Dichiarare una variabile finalPassword.
let finalPassword
// - Concatenare suddetta variabile j random alla variabile password iniziale.
finalPassword = password + '' + numberRandom;
console.log(finalPassword)
// - Stampare il risultato all'interno del nostro h1.
const messageDomElement = document.getElementById ('finalPassword'); 
//   - Infine modificare l'innerHTML del nostro tag h1 con il valore che abbiamo inserito nella variabile password.
messageDomElement.innerHTML = finalPassword;