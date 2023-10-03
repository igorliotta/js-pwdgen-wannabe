// # Generatore di password!

// - Chiedere all'utente il suo nome:
//   - Dichiarare una variabile x.
let userName;

//   - Assegnare a suddetta variabile un valore, la quale dovrà essere restituita tramite la funzione prompt.
userName = prompt ('Hola, come ti chiami?');
console.log(userName);

// - Chiedere all'utente il suo cognome:
//   - Dichiarare una variabile y.
let userSurname;

//   - Assegnare a suddetta variabile un valore, la quale anch'essa dovrà essere restituita tramite la funzione prompt.
userSurname = prompt ('Qual è il tuo cognome?');
console.log(userSurname);

// - Chiedere all'utente il suo colore preferito:
//    - Dichiarare una variabile z.
let userFavcolor;

//   - Assegnare a suddetta variabile un valore, la quale anch'essa a sua volta dovrà essere restituita tramite la funzione prompt.
userFavcolor = prompt ('Qual è invece il tuo colore preferito?');
console.log(userFavcolor);

// - Dichiarare una variabile password dove concateneremo le tre stringhe.
let password

//    - Concatenare i dati forniti dall'utente in un'unica stringa(nome, cognone e colore preferito).
password = userName + '' + userSurname + '' + userFavcolor;
console.log(password);




// # Bonus

// - Inserire alla fine della password finale un numero random da 1 a 99:
//   - Dichiarare una nuova variabile random nel quale verrà scelto in maniera randomica il numero.

let numberRandom = getRandomInt(99);
 console.log(numberRandom);

// - Dichiarare una variabile finalPassword.
let finalPassword;

// - Concatenare suddetta variabile random alla variabile password iniziale.
finalPassword = password + '' + numberRandom;
console.log(finalPassword);

// - Stampare il risultato all'interno del nostro h1.
const messageDomElement = document.getElementById ('finalPassword'); 

//   - Infine modificare l'innerHTML del nostro tag h1 con il valore che abbiamo inserito nella variabile finalpassword.
messageDomElement.innerHTML = finalPassword;

// Definire funzione per avere un numero random:
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
