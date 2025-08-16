// ES6 basics
// Let and const : both are block-scoped, let can be reassigned but cosnt can't

const student2 = 'Sam';
let student1 = 'Vivi';

student1 = 'Vivi2';
//student2 = 'Sam2';  // error

console.log(student1, student2);

// traditional function
function add(a, b){
    return a + b;
}

// arrow function
const add2 = (c, d)=> c + d;    //for one expression
const multiply = (c, d) => {    //for more than one statement
    const result = c * d;
    return result;
}

console.log(multiply(10, 20), add(10, 20));

const square = x => x * x;                          //for single pararmeter
const greet = () => console.log("Helo");            //no parameters
const student3 = (name, age) => ({ name, age });    //to return object, wrap it in paranthesis
greet();
console.log("Square: ", square(9), "Student3: ", student3('Vivi', 20));