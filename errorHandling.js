// try...catch
try {
  let result = JSON.parse("{ invalid json }");
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.name);
  console.log("Something went wrong:", error.message);
} finally {
    console.log("I always run!!")
}


// throw: for custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error(err.message); // Cannot divide by zero
}


// with async...await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos/1");
    let data = await response.json();
    console.log("Data received:", data);
  } catch (err) {
    console.error("Fetch failed:", err.message);
  } finally {
    console.log("I always run!!");
  }
}

fetchData();

