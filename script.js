// genera 16 numeri casuali tra 1 e 100
var numRandom;


for (var i = 0; i < 16; i++) {
  numRandom = Math.floor(Math.random() * 100)+1;

  console.log(numRandom);
}
