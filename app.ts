let message: string = "Teste de mensagem";
console.log(message)

let episodio: number = 4
//episodio = '4' //isso é errado mas passa, pode mudar para deixar passa no tsconfig.json
console.log("Este é: " + 4);
episodio = episodio + 1;
console.log("Este é: " + episodio);

let favoriteDroid
favoriteDroid = 'BB-8' // ainda nao foi atribuido o tipo
favoriteDroid = 10
console.log(favoriteDroid);

let isEnoughtToBeatMF = function(parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14;

console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughtToBeatMF(distance) ? 'Yes' : 'No'}`)

let call = (name:string) => console.log(`Do you copy, ${name}?`)
call('R2');

function inc (speed:number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5,1) = ${inc(5)}`)