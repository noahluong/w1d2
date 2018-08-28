function rollDie(rand1) {

for (var i = 1; i <= rand1; i++) {
console.log(Math.floor((Math.random(rand1)*6)+1));
}
}

rollDie();

