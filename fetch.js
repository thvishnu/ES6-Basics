/*
fetch(url, options)          // in options we specify methods, headers and body data etc
  .then(response => {
    // handle the response
  })
  .catch(error => {
    // handle any errors
  });
*/

// MHB: method: GET, POST, PUT etc; header: how am i sending, most common { "Content-Type": "application/json" }
// body: must be a string, your actual data turned into a string, JSON.stringify(...)


// by default GET request
fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then(response => response.json()) // parse response body as JSON
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// post request with data: sending data to a server
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'This is a test post',
    userId: 1
  })
})
  .then(response => response.json())        // the raw HTTP response  => parses the body into js object
  .then(data => console.log(data))          // data is parsed object we can use
  .catch(error => console.error('Error:', error));


// response.ok
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // parse JSON response
  })
  .then(data => {
    console.log("GET response data:", data);
  })
  .catch(error => {
    console.error("Error during GET request:", error);
  });

//fetch only rejects on network failure, not on HTTP errors → which is why response.ok is important.


