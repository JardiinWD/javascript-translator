/*# -> commenti contrassegnati con hashtag sono i percorsi fatti per raggiungere il funzionamento dell'app  */


/* #12.2 - Prendo il mio div con la text-area dove l'utente digita */
const fromText = document.querySelector(".from-text") // querySelector è più specifico in questo caso
/* console.log(fromText); */ // #12.3 - Verifico il div che ho preso

/* #14 - Prendo il mio div con la textarea del risultato traduzione (to-text) */
toText = document.querySelector(".to-text")
/* console.log(toText); */ // #14.1 - Verifica della mia costante in console

/* #1 - Prendo il tag select, quello con le opzioni linguistiche  */
selectTag = document.querySelectorAll("select") // Tag select (query selector all è meno specifico, prende in questo caso tutti i miei select)
/* console.log(selectTag); */ // #2 verifico il tag select

/* #15 - Pulsante centrale per cambio valore al click */
exchangeIcon = document.querySelector(".exchange")
/* console.log(exchangeIcon); */ // #15.1 Verifico in console

/* #11 - Seleziono il mio button che sarà l'artefice della mia traduzione */
translateBtn = document.querySelector("button") // Questo è il mio button
/* console.log(translateBtn); */ // #11.1 - Verifica del mio button in console

/* #16 - Seleziono la mia row e le icone a lei associate (quindi copy e vocale) */
icons = document.querySelectorAll(".row i");
console.log(icons); // #16.1 - Verifica in console


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

/* #15.2 - Scateno un evento al click del mio button exchange per fargli cambiare testo e invertire */
exchangeIcon.addEventListener("click", () => {
    /* console.log("Stai cliccando il tasto exchange"); */ // #15.3 - Verifico in console
    let tempText = fromText.value; // #15.4 - Salvo il mio valore input utente in una variabile
    tempLang = selectTag[0].value // #15.7 - Cambio anche il valore dell'option
    fromText.value = toText.value // #15.5 - Dichiaro uguaglianza tra il mio from e to text 
    selectTag[0].value = selectTag[1].value // #15.8 - Ora switcho il valore dei miei option
    selectTag[1].value = tempLang // #15.9 - In questo modo ho cambiato il valore
    toText.value = tempText // #15.6 - La variabile salvata inizialmente prende il posto di toText
})

/* #12 - Scateno un evento al click del mio button */
translateBtn.addEventListener("click", () => {
    /* console.log("Ciao, mi stai premendo"); */ // #12.1 - Verifico il corretto funzionamento al click
    let text = fromText.value; // #12.4 - alla mia variabile text "appendo" il valore della textarea dell'utente grazie a Value
    console.log(text); // #12.5 - Verifico in console la mia variabile    
    translateFrom = selectTag[0].value // #12.6 - prendo, dal div from il valore del tag
    translateTo = selectTag[1].value // #12.7 - prendo, dal div to il valore del tag
    console.log(`Questi sono le options che ho selezionato : ${translateFrom} | ${translateTo}`); // #12.8 - effettuo una verifica nel console

    toText.setAttribute("placeholder", "Sto traducendo...") // Se appunto non ha testo lascio un messaggio come placeholder

    /* #13 - richiamo l'api necessaria per tradurre da MyMemory . Max di 5000 parole al giorno */
    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}` // #13.1 - Cambio i parametri della mia query 

    /* #18 - Condizione di non chiamata API se l'area è vuota */
    /* if (!text) return; */
    /* #18.1 - Se l'utente non ha messo niente non faccio partire l'API */
    if (fromText.value === "") {
        /* console.log("Qua è vuoto"); */
        toText.setAttribute("placeholder", "Inserisci una parola o una frase per poterla tradurre")
    }
    else {
        console.log("Qua c'è qualcosa");
        /* #13.2 - Avvio il fetch per la mia api con le promise  */
        fetch(apiURL).then(res => res.json()).then(data => {
            // #13.3 - res è il mio responso e viene richiamato e salvato come file json
            console.log(data); // #13.4 - Verifico il mio responso. dentro a responseData in effetti, la mia variabile "translatedText" ha tradotto il testo
            toText.value = data.responseData.translatedText // #14.2 - Alla mia textarea riservata al risultato aggiungo il valore della mia traduzione
            toText.setAttribute("placeholder", "Translation")
        })
    }
})

/*#16.2 - avvio forEach per la selezione di icone */
icons.forEach(icon => {
    /* #16.3 - Scateno evento al click e, grazie a target, riesco a identificare ogni icona cliccata */
    icon.addEventListener("click", ({ target }) => {
        /* console.log(target); */ // #16.4 - Verifica in console

        /* #16.5 - Avvio la condizione nel caso venga cliccato sul copy */
        if (target.classList.contains("fa-copy") && fromText.value !== 0) {
            // #16.7 - SE l'id della mia icona è FROM
            if (target.id == "from") {
                /* console.log("Questa è un'icona copy in from"); */ // Verifica in console
                navigator.clipboard.writeText(fromText.value) // #17.3 Al click del copia io prendo valore nella textarea
            }
            // #16.8 - ALTRIMENTI SE l'id della mia icona è TO
            else if (target.id == "to") {
                /* console.log("Questa è un'icona copy in To"); */ // Verifica in console
                navigator.clipboard.writeText(toText.value) // #17.4 Al click del copia io prendo il valore nella textarea
            }
        }
        /* #17 - Aggiungo la medesima condizione per l'icona del volume */
        else if (target.classList.contains("fa-volume-high") && fromText.value !== 0) {
            // #17.1 - SE l'id della mia icona è FROM
            // #17.5 - Inizializzo (ma non dichiaro )
            let utterance;
            if (target.id == "from") {
                /* console.log("Questa è un'icona volume in from"); */ // Verifica in console
                /* #17.6 - IMPORTANTE, funzione nuova e interna a JS per il ripetitore vocale */
                utterance = new SpeechSynthesisUtterance(fromText.value)
                utterance.lang = selectTag[0].value // Imposto il linguaggio al mio traduttore
            }
            // #17.2 - ALTRIMENTI SE l'id della mia icona è TO
            else if (target.id == "to") {
                /* console.log("Questa è un'icona volume in To"); */ // Verifica in console
                /* #17.7 - Faccio la stessa cosa con il testo dell'area PC */
                utterance = new SpeechSynthesisUtterance(toText.value)
                utterance.lang = selectTag[1].value // Imposto il linguaggio al mio traduttore
            }
            /* #17.8 - La mia variabile utterance finisce nella funzione speecSynthesis */
            speechSynthesis.speak(utterance)
        }
    })
})

