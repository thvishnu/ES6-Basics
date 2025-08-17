// creating promise
const myPromise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        // resolve(["Promise fulfilled", {name: 'Vivi'}]);
        resolve("Promies fulfilled!!");
    }
    else{
        reject("Promise rejected!!");
    }
});

// consming a promise: using the result or handling the outcome of asynchronous operation
// anything we pass to resolve and reject becomes the value for .then() and .catch()
// it can be anything array, object, string, number
myPromise
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })

// chaining of promise: promise returns another promise from its .then function
const yourPromise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        resolve("Hello Vivi");
    }
    else{
        reject("Promise rejected!!");
    }
});

yourPromise
    .then(data =>{
        console.log(data);
        return data + " and Sam"
    })
    .then(newData =>{
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })


// callback fucntion
function doSomething(callback) {
    console.log("Doing something...");
    callback(); 
}

function myCallback() {
    console.log("Callback function executed!");
}
doSomething(myCallback);          // Passing the function as an argument

// callback hell: deeply nested callbacks, hard to read
function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user");
        callback({ id: userId, name: "Vivi" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Fetched posts for user " + userId);
        callback([{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log("Fetched comments for post " + postId);
        callback([{ id: 201, text: "Nice post!" }]);
    }, 1000);
}

// callback hell!
getUser(1, function(user) {                                  //after 1 sec the user becomes whats inside callback
    getPosts(user.id, function(posts) {                      // posts has the array of posts since that we passed
        getComments(posts[0].id, function(comments) {        // it passes comments array in callback
            console.log("User:", user);                      // we can finally use user, post and comment
            console.log("First post:", posts[0]);
            console.log("Comments:", comments);
        });
    });
});


// converting to promise
function placeOrder(pizzaType) {
    return new Promise((resolve, reject) => {
        console.log(`Placing order for ${pizzaType}...`);
        setTimeout(() => {
            if (pizzaType === "Cheese") {
                resolve(`${pizzaType} pizza is ready!`);
            } else {
                reject("Sorry, only Cheese pizza is available.");
            }
        }, 2000);
    });
}

function deliverOrder(order) {
    return new Promise((resolve) => {
        console.log("Delivering order...");
        setTimeout(() => {
            resolve(`${order} Delivered to your home!`);
        }, 1500);
    });
}

// Consuming the promises
placeOrder("Cheese")
    .then(order => {
        console.log(order);
        return deliverOrder(order);
    })
    .then(deliveryStatus => {
        console.log(deliveryStatus);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Order process finished.");
    });


// async/await: syntactic sugar for working with promises
// async function always returns a promise
// await pauses untill the promise resolve or reject
// it makes code look synchronous but it is still pauses locally inside the function

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received!"), 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    const result = await fetchData();  // waits here until resolved
    console.log(result);
    console.log("Done!");
}

getData();

// for error handling we can use try...catch block


