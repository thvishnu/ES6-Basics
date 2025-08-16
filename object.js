// objects: a collection of key-vlaue pairs
// keys are called properties or methods if value is a function
// value can be anything number, string, array, function or even other object

// creating object
// common
const student = {
    name: 'Sam',
    age: 20,
    isStudent: true
}

// new Object()
const student1 = new Object();
student1.name = 'Vivi';
student1.age = 20;

// constructor function
function students(name, age) {
  this.name = name;
  this.age = age;
}
const student3 = new students("Ria", 25);


// accessing
// dot notation
console.log(student.name);

// bracket notation
console.log(student["isStudent"]);

// adding/updating
student.place = 'Delhi';
student.age = 21;
console.log(student);

// deleting
delete student.age;
console.log(student);

// function inside objects = method
const obj = {
    greet: function(){
        return "hello hello"
    },
    anotherGreetingWay(){
        return "another hello"
    }
}
console.log(obj.greet());
console.log(obj.anotherGreetingWay());


// looping through objects
// for in: loop through all keys
console.log("Loop1");
for(let key in student){
    console.log(key, student[key]);
}
   
console.log("Loop2");
Object.values(student).forEach(value=>{
    console.log(value);
})

console.log("Loop3");
Object.entries(student).forEach((key, val)=>{
    console.log(key, val);
})

console.log("Loop4");
for(let [key, val] of Object.entries(student)){
    console.log(key, val);
}



// built in methods
const object = { a: 1, b: 2, c: 3 };

console.log(Object.keys(object));   
console.log(Object.values(object)); 
console.log(Object.entries(object));

// nested object
const person = {
    name: 'Mark',
    address: {
        Country: 'Japan',
        City: 'Tokyo'
    }
}

console.log(person.address);
console.log(person.address.Country);


// Freeze and seal: to protect object from being changed
// Object.freeze(): no delete, no update, no edit
const newStudent = Object.freeze({
    name: 'Sam',
    age: 21,
    Place: 'Delhi'
});

newStudent.number = 20;  // no effect
delete newStudent.age;   // no effect
console.log(newStudent);

// Object.seal(): can't add or delete but can update
const newStudent1 = Object.seal({
    name: 'Mai',
    age: 21,
    Place: 'New Delhi'
})

newStudent1.age = 20;              // works
newStudent1.country = 'India';     // does not work
delete newStudent1.name;           // does not work
console.log(newStudent1);


// destructuring: a short and clean way to unpack values from arrays and objects in esparate variables
// extracting
console.log("Destructuring starts here");
const person1 = {
    name: 'Jake',
    age: 20
}
const {name, age} = person1;  // variables must match keys
console.log(name, age);

// renaming variable
const {name: newName, age: newAge} = person1;
console.log(newName, newAge);

// default: if propertity does not exixt
const {name: personName, place = 'unknown'} = person1;
console.log(personName, place);

// rest operator
const person2 = {
    id: 1,
    name2: 'Sia',
    age: 20
}
const {id, ...rest} = person2;
console.log(id, rest);


// shorthand property names: if both key and values are same
// works only if the variable already exist
const name1 = 'Denmark';
const age1 = 21;
const person3 = {
    name1,
    age1
}
console.log(person3);