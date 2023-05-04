

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


//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const passwod = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedpassword);
//results
//