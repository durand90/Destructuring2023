

/*
//1
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [ randomCar ] =  cars;
const [ , otherRandomCar ] = cars;

console.log(randomCar);
console.log(otherRandomCar);
//results
//console.log(randomCar) //log: Tesla
//console.log(otherRandomCar) //log: Mercedes
*/


/*
//2
const employee = {
    name: 'elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
console.log(otherName);
//results
//console.log(name)  //log: reference error, name was never defined.
//console.log(otherName) // should log elon if comment out console.log(name)
*/

/*
//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword);
//results
//console.log(password) //log: '12345'
//console.log(hashedPassword) //undefined
*/

/*
//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [,,, second] = numbers;
const [,,,,,,,, third] = numbers;

console.log(first == second);
console.log(first == third);
//results
//console.log(first == second) //log: true
//console.log(first == third) //log: false
*/

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ , willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//results
//c