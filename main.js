// Esercitazione 1: Check lista email. Creare un array con un insieme di indirizzi email. Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for). Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

// creare un array con un insieme di indirizzi email
var email = ['homer@simpson.com', 'bart@simpson.com', 'marge@simpson.com', 'lisa@simpson.com', 'ned@flanders.com', 'boe@szyslak.com' ];

// console.log(email)

// chiedere all'utente il suo indirizzo email
var emailUtente = prompt('Inserisci la tua email')
// console.log(emailUtente);

// verificare se è nella lista (tramite un ciclo for) e comunicare un messaggio adeguato a seconda del risultato
for (var i = 0; i < 6; i++) {
    if (email[i] == emailUtente) {
        console.log('Congratulazioni sei nella lista!')
    } else {
        console.log('Spiacenti, non sei nella lista.');
    }
}
