/* 
    .1 info sui chilometri percossi ed eta passeggero.
    .2 caclolo prezzo totale del viaggio in base ai km (0.21 euro al km)
    .3 applicare sconto del 20% se minorenne, 40% over 65
    .4 stampare prezzo finale con due decimali per indicare i centesimi

*/

/*.1  */

const km = prompt("Inserisci Km da percorrere");
if(isNaN(km)){
    alert("Errore! Inserire un numero")
}
const age = prompt("Iserisci età");
if(isNaN(age)){
    alert("Errore !Inserire un numero")
}


console.log("Km",km);
console.log("Età",age);

/*.2 */
const prezzoKm = 0.21 ;
console.log("Prezzo al km", prezzoKm);

let prezzoTotale =  km * prezzoKm;

/* .3 */
if(age < 18 ){
    prezzoTotale = prezzoTotale * 0.8;
} 
else if(age > 65){
    prezzoTotale = prezzoTotale * 0.4;
}

console.log("Prezzo totale",prezzoTotale);








