/* 1 - Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

var mailUtente = prompt("Controllo accesso, scrivi il tuo indirizzo mail");
var mailValide = ["pippo@boolean.careers", "pluto@boolean.careers", "paperino@boolean.careers"];

var accesso = false;

mailValide.push("mario.rossi@boolean.careers");

// debug
console.log("accesso pre ciclo" , accesso);

for (i = 0; i < mailValide.length; i++) { //controllo corrispondenza mail utente con array
    if (mailValide[i] == mailUtente) {
        accesso = true; //cambio il valore della variabile se la mail è presente
        i = mailValide.length; //esco dal ciclo se trovo la corrispondenza esatta
    } 
};

// debug
console.log("accesso post ciclo" , accesso);

if (accesso == true) {
    console.log(mailUtente , "è tra gli indirizzi validi, accesso in corso...");
} else {
    console.log(mailUtente , "non è tra gli indirizzi mail validi, accesso negato!");
};