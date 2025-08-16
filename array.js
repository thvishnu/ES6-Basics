// array: an ordered collection of values or element
// can contain mix data types: [20, 'Vivi', {name: 'Sam'}];

// creating
const myArr = [10, 20, 30];
const emptyArr = []                   // when we want to add elements later
const numbers = new Array(1, 2, 3);   //constructor function, here Array is js built-in function, not really recommended

// access and modification
console.log(myArr, emptyArr, numbers);
console.log(myArr[0], numbers[0]);

// adding and removing elements
const arr = ['Vivi', 'Sam', 'Ria', 'Mark'];
console.log(arr);
arr.push('mick');           //add at the end
console.log(arr);
arr.pop();                  //remove from end
console.log(arr);
arr.unshift('first');       //add from start
console.log(arr);
arr.shift();                //remove at the start
console.log(arr);

// iterating
const newArr = [1, 2, 3, 4, 5];
for(let i = 0; i < newArr.length; i++){
    console.log(newArr[i]);
}

// for of: directly over values
for(let e of arr){
    console.log(e);
}

// runs once for each element
arr.forEach((value, index) => {
  console.log(index, value);
});

// methods
// map: return new array with transformed or changed value
let boolArr = newArr.map((val) => {
    if(val%2 == 0) return true;
    else return false;
})
console.log(boolArr);
 
// filter: return new array with elemets which statisfied the condition only
let filter = newArr.filter((val) => {
    return val%2 != 0;
})
console.log(filter);

// reduce: return a single value, it depends, it can be number, string, object
let reduce = newArr.reduce((acc, val) => {
    return acc + val;
})
console.log(reduce);


//Destructuring: makes code cleaner, great for API

// spread operator: unpacks
const nums = [10, 20, 30, 40, 50];
console.log(...nums);
const newNums = [...nums];              //easy to copy
console.log(newNums);
const nums2 = [60, 70, 80, 90, 100];
const nums3 = [...nums, ...nums2];      //easy to merge
console.log(...nums3);

// rest operator: packs
const [first, ...rest] = ['first', 'rest1', 'rest2', 'rest3'];
console.log(first);
console.log(rest);

// array destructuring
// extract values
const myNumbers = [10, 20, 30];
const [a, b, c] = myNumbers;

console.log(a); 
console.log(b); 
console.log(c); 

// skipping
const colors = ["red", "green", "blue", "yellow"];
const [firstfirst, , third] = colors;

console.log(firstfirst); 
console.log(third);

// swap classic
let i = 1, e = 2;
[i, e] = [e, i];
console.log(i, e); 

