const score = 100
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.555

console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //'en-IN vlaue is indian value'

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //Math is an object value
console.log(Math.abs()); //abs is absolute value

console.log(Math.round(4.3)); //gives round value
console.log(Math.ceil(4.2)); //gives top value
console.log(Math.floor(4.9)); //gives bottom value
console.log(Math.min(4, 3, 5, 6)); // gives minimum value
console.log(Math.max(4, 3, 6, 8)); // gives max value

console.log(Math.random()); // gives random value and gives value between 0 and 1 (decimal mostly)
console.log((Math.random()*10) + 1); //shift value before one decimal
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);