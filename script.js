console.log('JS OK');

/* Traccia:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
*/

//Functons

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumbers = [];  // array di numeri casuali che parte vuoto (da 1 a 50 nel mio caso)

randomNumbers.push(getRandomNumber(1, 50), getRandomNumber(1, 50), getRandomNumber(1, 50), getRandomNumber(1, 50), getRandomNumber(1, 50)); //pushamo 5 numeri casuali

console.log(randomNumbers);

const memoryNumber = alert(`I tuoi numeri sono ${randomNumbers}`);

// Chiediamo all'utente di scegliere 5 numeri con 5 prompt

const userNumber1 = parseInt(prompt(`Scegli un numero da 1 a 50.`));
const userNumber2 = parseInt(prompt(`Scegli un numero da 1 a 50.`));
const userNumber3 = parseInt(prompt(`Scegli un numero da 1 a 50.`));
const userNumber4 = parseInt(prompt(`Scegli un numero da 1 a 50.`));
const userNumber5 = parseInt(prompt(`Scegli un numero da 1 a 50.`));

console.log(userNumber1, userNumber2, userNumber3, userNumber4, userNumber5);


