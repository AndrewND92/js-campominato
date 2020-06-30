// genera 16 numeri casuali tra 1 e 100
var numRandom;


for (var i = 0; i < 16; i++) {
  numRandom = Math.floor(Math.random() * 100)+1;

  console.log(numRandom);
}

// chiedere all'utente tot volte un numero da 1 a 100
for (var i = 0; i < 4 ; i++) {

  var numUtente = prompt("insersci un numero tra 1 e 100")
  console.log(numUtente);
}

  if (numRandom == numUtente) {
  console.log("hai perso");
  }
