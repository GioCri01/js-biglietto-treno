/* 
    .1 info sui chilometri percossi ed eta passeggero.
    .2 caclolo prezzo totale del viaggio in base ai km (0.21 euro al km)
    .3 applicare sconto del 20% se minorenne 40% over 65
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


console.log(km);
console.log(age);

/*.2 */




