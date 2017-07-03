var message = "Teste de mensagem";
console.log(message);
var episodio = 4;
//episodio = '4' //isso é errado mas passa, pode mudar para deixar passa no tsconfig.json
console.log("Este é: " + 4);
episodio = episodio + 1;
console.log("Este é: " + episodio);
var favoriteDroid;
favoriteDroid = 'BB-8'; // ainda nao foi atribuido o tipo
favoriteDroid = 10;
console.log(favoriteDroid);
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughtToBeatMF(distance) ? 'Yes' : 'No'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5,1) = " + inc(5));
