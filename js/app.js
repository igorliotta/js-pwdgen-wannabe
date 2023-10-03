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
userFavcolor = prompt ('Qual è invece il tuo colore preferito?')
console.log(userFavcolor)
// - Dichiarare una variabile password dove concateneremo le tre stringhe.
let userPassword
//    - Concatenare i dati forniti dall'utente in un'unica stringa(nome, cognone e colore preferito).
userPassword = userName + '' + userSurname + '' + userFavcolor;
console.log(userPassword);
// - Stampare il risultato all'interno di un h1:
//   - Inserire nella pagina html un tag h1 che possegga un id = "password".
//   - Recuperare tramite Js gli elementi del Dom che posseggano id = "password".
//   - Infine modificare l'innerHTML del nostro tag h1 con il valore che abbiamo inserito nella variabile password.