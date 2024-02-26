const name = "Shubham"
const repoCount = 50

console.log(`${name.ToUppercase}, ${repoCount}`);

const gameName = new String('shubham')

console.log(gameName[2]);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     Shubham     "
console.log(newStringOne.trim());
console.log(newStringOne);

const url = "https://shubham.com/shubham%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('shubham'));

console.log(gameName.split('-'));