/*# -> commenti contrassegnati con hashtag sono i percorsi fatti per raggiungere il funzionamento dell'app  */


/* alert("Ciao, sono collegato") */

/* #12.2 - Prendo il mio div con la text-area dove l'utente digita */
const fromText = document.querySelector(".from-text") // querySelector è più specifico e va a pescare proprio la mia text area nel div
console.log(fromText); // #12.3 - Verifico il div che ho preso


/* #1 - Prendo il tag select, quello con le opzioni linguistiche  */
selectTag = document.querySelectorAll("select") // Tag select (query selector all è meno specifico, prende in questo caso tutti i miei select)
/* console.log(selectTag); */ // #2 verifico il tag select


/* #11 - Seleziono il mio button che sarà l'artefice della mia traduzione */
translateBtn = document.querySelector("button") // Questo è il mio button
/* console.log(translateBtn); */ // #11.1 - Verifica del mio button in console




/* #3 - Avvio ciclo forEach all'interno del select per verificare tutte le opzioni disponibili */
/* Le prende tutte, sia dall'lato utente sia dal lato risposta PC */
selectTag.forEach((tag, id) => {
    /* console.log(tag); */
    /* #4 - Grazie al ciclo for, seleziono ogni paese presente al mio oggetto countries.js */
    for (const country_code in countries) {
        /* console.log(`${country_code} | ${countries[country_code]}`); */ // #5 - Verifica in delle lingue e dei paesi associati
        let selected; // #8 - dichiaro (ma non inizializzo) la mia variabile per la selezione delle opzioni
        /* #9 - avvio un ciclo per capire quale ho selezionato */
        if (id == 0 && country_code == "en-GB") {
            /*#9.1 - seleziono, di default l'inglese (inghilterra) nella lingua input utente */
            selected = "selected"
        } else if (id == 1 && country_code == "it-IT") {
            /*#9.2 - E la faccio tradurre, di default, in Italiano */
            selected = "selected"
        }
        // #6 - Inserimento dinamico delle mie opzioni
        // #10 - aggiunta del mio valore selected alle opzioni
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option) // #7 - Aggiunto a select il mio singolo tag ciclato
    }
})

/* #12 - Scateno un evento al click del mio button */
translateBtn.addEventListener("click", () => {
    /* console.log("Ciao, mi stai premendo"); */ // #12.1 - Verifico il corretto funzionamento al click
    let text = fromText.value; // #12.4 - alla mia variabile text "appendo" il valore della textarea dell'utente grazie a Value
    console.log(text); // #12.5 - Verifico in console la mia variabile    
    translateFrom = selectTag[0].value // #12.6 - prendo, dal div from il valore del tag
    translateTo = selectTag[1].value // #12.7 - prendo, dal div to il valore del tag
    console.log(`Questi sono le options che ho selezionato : ${translateFrom} | ${translateTo}`); // #12.8 - effettuo una verifica nel console
})
