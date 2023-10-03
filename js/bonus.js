// # Bonus

// - Inserire alla fine della password finale un numero random da 1 a 99:
//   - Dichiarare una nuova variabile j random nel quale verrà scelto in maniera randomica il numero.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

 console.log(getRandomInt(99));
// - Dichiarare una variabile finalPassword.
// - Concatenare suddetta variabile j random alla variabile password iniziale.
// - Stampare il risultato all'interno del nostro h1.