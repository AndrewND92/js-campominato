// array dei numeri utente e pc
var numRandomPc = [];
var numUtente = [];

// genera 16 numeri casuali tra 1 e 100
// I numeri non possono essere duplicati

while( numRandomPc.length < 16 ) {
  var num = generatoreNum();
  var isIncluded = numRandomPc.includes(num);

  if( isIncluded == false ) {
  		numRandomPc.push(num);
  }
}
console.log(numRandomPc);

// for (var i = 0; i < 16; i++) {
//   num = generatoreNum();
//   numRandomPc.push(num);
// }

// chiedere all'utente tot volte un numero da 1 a 100
// L’utente non può inserire più volte lo stesso numero.
// for (var i = 0; i < 84; i++) {
//
//   var promptUtente = parseInt(prompt("insersci un numero tra 1 e 100"));
//   numUtente.push(promptUtente);
//
//   // controllo se ci sono dei numeri in comune nei due array
//   if (numRandomPc.includes(numUtente[i])) {
//     console.log("hey" + );
//     break;
//   }
// }

// FUNZIONE
function generatoreNum() {
  var n = Math.floor(Math.random() * 100)+1;
  return n;
}
