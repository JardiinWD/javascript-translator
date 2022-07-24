/*# -> commenti contrassegnati con hashtag sono i percorsi fatti per raggiungere il funzionamento dell'app  */


/* alert("Ciao, sono collegato") */
/* #1 - Prendo il tag select, quello con le opzioni linguistiche  */
const selectTag = document.querySelectorAll("select") // Tag select
console.log(selectTag); // #2 verifico il tag select

/* #3 Avvio ciclo forEach all'interno del select per verificare tutte le opzioni disponibili */
/* Le prende tutte, sia dall'lato utente sia dal lato risposta PC */
selectTag.forEach((tag, id) => {
    /* console.log(tag); */
    /* #4 Grazie al ciclo for, seleziono ogni paese presente al mio oggetto countries.js */
    for (const country_code in countries) {
        console.log(`${country_code} | ${countries[country_code]}`); // #5 Verifica in delle lingue e dei paesi associati
        let selected; // #8 dichiaro (ma non inizializzo) la mia variabile per la selezione delle opzioni
        /* 
        #9 avvio un ciclo per capire quale ho selezionato 
        */
        if (id == 0 && country_code == "en-GB") {
            /*#9.1 seleziono, di default l'inglese (inghilterra) nella lingua input utente */
            selected = "selected"
        } else if (id == 1 && country_code == "it-IT") {
            /*#9.2  E la faccio tradurre, di default, in Italiano */
            selected = "selected"
        }
        // #6 Inserimento dinamico delle mie opzioni
        // #10 aggiunta del mio valore selected alle opzioni
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option) // #7 Aggiunto a select il mio singolo tag ciclato
    }
})