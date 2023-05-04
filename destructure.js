

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
//console.log(name)  //log: elon
//console.log(otherName) //log: elon