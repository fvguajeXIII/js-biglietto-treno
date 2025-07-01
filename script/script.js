/*1 - Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
il prezzo del biglietto è definito in base ai km (0.21 € al km)
*/

const km = parseInt(prompt(`Quanti chilometri vuole percorrere?`));

const eta = parseInt(prompt(`Qanti anni ha?`));

const prezzoKm = 0.21;

const prezzoBigliettoStandard = prezzoKm * km;

let text = `il prezzo del biglietto è di`

let currency = `Euro`

/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

let finalPrice

if (eta < 18){
  finalPrice = (prezzoBigliettoStandard * 0.6).toFixed(2);
}

else if(eta >=65){
  finalPrice = (prezzoBigliettoStandard * 0.8).toFixed(2);
}

else{
  finalPrice = prezzoBigliettoStandard.toFixed(2);
}

console.log(`${text} ${finalPrice} ${currency}`)