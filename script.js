
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let arrayNumeriUtente=[];

let sommaNumeriUtente = 0;

while(sommaNumeriUtente < 50){

    let numeroUtente = parseInt(prompt("Inserisci un numero"));

    arrayNumeriUtente.push(numeroUtente);

    sommaNumeriUtente += numeroUtente;

    console.log(arrayNumeriUtente);

}

console.log(sommaNumeriUtente);