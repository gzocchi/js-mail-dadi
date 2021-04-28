/* 2 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

var giocataPC = Math.floor(Math.random() * 6) + 1;
var giocataUtente = Math.floor(Math.random() * 6) + 1;

// debug
console.log(giocataPC);
console.log(giocataUtente);

if (giocataPC < giocataUtente || giocataPC > giocataUtente) {
    if (giocataPC < giocataUtente) {
        console.log("Hai vinto!!!");
    } else {
        console.log("Ha vinto il PC!");
    }
} else {
    console.log("Pareggio!");
}