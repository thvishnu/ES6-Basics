// call stack
function greet() {
  console.log("Hello!");
}

function sayName(name) {
  console.log("My name is " + name);
  greet();
}

function main() {
  sayName("Alice");
}

main();


// task queue and event loop
console.log("A");

setTimeout(() => {
  console.log("B - from Task Queue");
}, 0);

Promise.resolve().then(() => {
  console.log("C - from Microtask Queue");
});

console.log("D");


// Functions scheduled with these methods do not run exactly at the delay,
// but as soon as the call stack is free after the delay.
// both are asynchronous and follow event loop and task queue
// setTimeout
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");


// setInterval
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 counts
  }
}, 1000);

// Call stack → Microtask queue → Macrotask queue → Event loop.

