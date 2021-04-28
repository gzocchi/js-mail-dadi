/* 1 - Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

var mailUtente = prompt("Controllo accesso, scrivi il tuo indirizzo mail");
var mailValide = ["pippo@boolean.careers", "pluto@boolean.careers", "paperino@boolean.careers"];

var accesso = false;

mailValide.push("mario.rossi@boolean.careers");

for (i = 0; i < mailValide.length; i++) { //controllo corrispondenza mail utente con array
    if (mailValide[i] == mailUtente) {
        accesso = true; //cambio il valore della variabile se la mail è presente
        break; //esco dal ciclo se trovo la corrispondenza esatta
    } 
};

// var accesso = mailValide.includes(mailUtente);

if (accesso == true) {
    console.log(mailUtente , "è tra gli indirizzi validi, accesso in corso...");
    document.getElementById("validazione_mail").innerHTML = '<p class="green">' + mailUtente + " è tra gli indirizzi validi, accesso in corso...</p>";
} else {
    console.log(mailUtente , "non è tra gli indirizzi mail validi, accesso negato!");
    document.getElementById("validazione_mail").innerHTML = '<p class="red">' + mailUtente + " non è un indirizzo mail valido, accesso negato!</p>";
};