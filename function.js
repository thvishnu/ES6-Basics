// function: a reusable block of code to perform a particular task


// declaration, hoisted
function add(a, b){
    return a + b;
}
console.log(add(10, 20));

// expression, non-hoisted
const add1 = function(a, b){
    return a + b;
}
console.log(add1(20, 30));


// arrow functions: if one parameter, paranthesis can be omitted and if single expression 
// then return is implicit   // does not have their own this
const name = () => console.log("Vivi");
name();

const car = () => "Scor";
console.log(car());

const add3 = (a, b) => {
    const c = a + b;
    return c;
}
console.log(add3(100, 2));


// parameters: variables listed in a function definition
// arguments: actual values that are passed during function call
function greet(name, age) {      //name and age are parameters
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet('Vivi', 20);               //Vivi and 20 are arguments.

// default parameter: if no parameter is given then it takes the default one
function greet1(name = 'Everyone'){
    console.log(`Hello, good morning ${name}`);
}
greet1();
greet1('Vivi');

// rest parameter: if we do not know the number of parameter being passed
function add2(...numbers){
    return numbers.reduce((a, b) => a + b);
}
console.log(add2(1, 2, 3, 4, 5));
console.log(add2(10, 10));

// arguments object: a special built in object inside normal function only
function arg(){
    console.log(arguments);
}
arg('Vivi', 20, 'Helo helo', 1000);

// A closure is created when a function "remembers" and can access variables from its outer scope,
// even after that outer function has finished executing.
// a clouser is when functions can access the variables from the scope they were created.
// used: while hiding data, callbacks, async code, event handlers
function outer(){
    let message = 'This is clouser and i am outside!!';

    function inner(){
        console.log(message);
    }
    return inner;
}
const fun = outer();   // fun is inner function which remembers the variable
fun(); 

// binding: it refers to which 'this' keyword points to
// rules to decide
// 1. default: when called without any context: this => window, in strict mode => undefined
function defaultShow(){
    console.log(this);
}
// defaultShow();

// 2. implicit binding: when function is called as a method of object: this => object
const person = {
    name: 'Vivi',
    greet: function(){
        console.log(`hello ${this.name}`);
    }
};
person.greet();

// 3. explicit binding: 'this' can be manually controlled by call(), apply(), bind()
function greet(city, end ) {
  console.log(`Hi, I am ${this.name} from ${city}, ${end}`);
}

const person1 = { name: "Ria" };

// call → pass args one by one: call(thisArg, arg1, arg2, ...)
greet.call(person1, "tokyo", "bye");  


// apply: pass args as array: apply(thisArg, [argArray])
greet.apply(person1, ["Paris", "Paris2"]);  


// bind: doesn't run immediately, returns a new function
const boundGreet = greet.bind(person1, "Berlin", "see yaa");
boundGreet(); 


// 4. 'new' keyword: 'this' is bound to the newly created object
function person2(name) {
  this.name = name;
}
const p = new person2("Sam");
console.log(p.name); 

// arrow function binding: arrow function does not have its own this so, 
// it borrows from surrounding scope
const obj2 = {
  name: "Mark",
  greet: function() {            
    const arrow = () => console.log(this.name);    //arrow function inside object method
    arrow();
  }
};

obj2.greet();

// IIFE: Immediately Invoked Function Expression
// executes immediately without needing to be called
// Used: variables inside are private, run only once
// we can make varients just wrap any function inside () so it is treated as expression and immediate call
(function() {
  console.log("I run immediately!");
})();







