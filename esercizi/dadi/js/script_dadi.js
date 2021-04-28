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

// al meglio dei 5
var puntiPC = 0;
var puntiUtente = 0;

//debug
// console.log("primo debug punti PC/Utente:",puntiPC,puntiUtente);

for (i = 0; i < 5; i++) {
    var pc = Math.floor(Math.random() * 6) + 1;
    var utente = Math.floor(Math.random() * 6) + 1;

    //debug
    // console.log("debug lancio n°",i+1,pc,utente);

    if (pc < utente || pc > utente) {
        if (pc < utente) {
            console.log("Hai vinto!!!");
            puntiUtente++;
        } else {
            console.log("Ha vinto il PC!");
            puntiPC++;
        }
    } else {
        console.log("Pareggio! Ritenta");
        i--;
    }
};

//debug
// console.log("secondo debug punti PC/Utente:",puntiPC,puntiUtente);

if (puntiUtente > puntiPC) {
    console.log("Hai vinto!!!");
    document.getElementById("giocata5").innerHTML = '<p class="win">Complimenti! Hai vinto ' + puntiUtente + ' partite su 5!</p>';
} else {
    console.log("Ha vinto il PC!");
    document.getElementById("giocata5").innerHTML = '<p class="lost">Il PC ha vinto! ' + puntiPC + ' partite su 5 giocate</p>';
};