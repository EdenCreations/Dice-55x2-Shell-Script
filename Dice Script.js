var dice100 = [];

for (var i = 0; i <= 100; i++){

dice100.push(i);

for (var index = 0; index<dice100.length;index++){

}

}

  

function rollDice(){

return Math.floor(Math.random()*100)

}

  

var r = rollDice.apply(dice100);

if (r > 55){

const winMessage = `Congradulations! you won with a roll of ${r}!`

console.log(winMessage)

;}

else if (r <= 55){

const lossMessage = `Bad luck, you lost with a roll of ${r}.`

console.log(lossMessage)

;}

else {

return -1

;}
