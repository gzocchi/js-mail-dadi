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
        document.getElementById("giocata").innerHTML = '<p class="win"> Hai vinto!!! ' + giocataUtente + " a " + giocataPC + '</p>';
    } else {
        console.log("Ha vinto il PC!");
        document.getElementById("giocata").innerHTML = '<p class="lost"> Ha vinto il PC! ' + giocataUtente + " a " + giocataPC + '</p>';
    }
} else {
    console.log("Pareggio!");
    document.getElementById("giocata").innerHTML = '<p class="draw"> Pareggio! ' + giocataUtente + " a " + giocataPC + '</p>';
}