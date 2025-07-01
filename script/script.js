/*1 - Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
il prezzo del biglietto è definito in base ai km (0.21 € al km)
*/

const km = parseInt(prompt(`Quanti chilometri vuole percorrere?`));

const eta = parseInt(prompt(`Qanti anni ha?`));

const prezzoKm = 0.21;

const prezzoBigliettoStandard = prezzoKm * km;

console.log(`il prezzo del biglietto standard è di euro ${prezzoBigliettoStandard}`);
