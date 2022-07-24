/* alert("Ciao, sono collegato") */

const selectTag = document.querySelectorAll("select") // Prendo il tag select, quello con le opzioni linguistiche

/* Avvio ciclo forEach all'interno del select per verificare tutte le opzioni disponibili */
/* Le prende tutte, sia dall'lato utente sia dal lato risposta PC */
selectTag.forEach(tag => {
    /* console.log(tag); */
    /* Grazie al ciclo for, seleziono ogni paese presente al mio oggetto countries.js */
    for (const country_code in countries) {
        console.log(country_code); // Verifica in console dei paesi
    }
})