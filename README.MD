# Esercizi su Async/Await in JavaScript – Modulo 1 Lezione 4

Questa repository contiene esercizi svolti sull'**utilizzo di async/await** in JavaScript vanilla, con particolare attenzione alla gestione delle chiamate API e delle promesse. 

> aggiunta anche una repo di correzione [correzione-ex-js-async-chef](https://github.com/willymariino/correzione-ex-js-async-chef) 

## Obiettivi 

- Comprendere il funzionamento di async/await
- Gestire chiamate API REST con JavaScript
- Estrarre e manipolare dati da risposte asincrone
- Gestire gli errori nelle operazioni asincrone

## Struttura del Progetto

- **script.js**: contiene la funzione principale `getChefBirthday(id)` che recupera la data di nascita dello chef associato a una ricetta tramite chiamate API asincrone.
- **README.MD**: questo file, con spiegazione dettagliata del progetto e delle finalità didattiche.
- **File di correzione**: incluso nella repository per confrontare la soluzione proposta con la versione corretta e approfondire la comprensione degli argomenti trattati.

## Esercizio Principale

### Recupero della data di nascita dello chef

L'esercizio consiste nell'implementare una funzione asincrona che:
1. Recupera una ricetta tramite API (`https://dummyjson.com/recipes/{id}`)
2. Estrae il `userId` dalla ricetta
3. Recupera i dati dello chef tramite API (`https://dummyjson.com/users/{userId}`)
4. Restituisce la data di nascita dello chef

La funzione deve gestire gli errori tramite blocchi `try/catch` e restituire una Promise.

