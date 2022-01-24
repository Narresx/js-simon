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

for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomNumber(1, 50));
}

console.log(randomNumbers);

const memoryNumber = alert(`I tuoi numeri sono ${randomNumbers}`);

const interval = setTimeout(myMemoryFunction, 3000); // Evoco la mia funzione dopo 30 secondi (3 seondi per controllare)

const correctUserNumbers = []; // Array vuoto dove andrò a pushare i numeri che sceglierà l'utente



function myMemoryFunction() {
    // Chiediamo all'utente di scegliere 5 numeri con 5 prompt

    for (let i = 0; i < 5; i++) {

        const userNumber = parseInt(prompt('Scegli un numero da 1 a 50.'));
        if (randomNumbers.includes(userNumber)) {
            correctUserNumbers.push(userNumber);
        }
    }
    console.table(correctUserNumbers);
    console.log(`Hai indovinato ${correctUserNumbers.length} numero/i`)
};


/*
function myMemoryFunction() {
    // Chiediamo all'utente di scegliere 5 numeri con 5 prompt
    let i = 0;
    while (i < 5) {
        const userNumber = parseInt(prompt('Scegli un numero da 1 a 50.'));
        if (userNumber != isNaN) {
            alert('Il valore inserito non è corretto');
            if (randomNumbers.includes(userNumber)) {
                correctUserNumbers.push(userNumber);
            }
        }
        i++;
    }
    console.table(correctUserNumbers);
    console.log(`Hai indovinato ${correctUserNumbers.length} numero/i`);
};
*/
