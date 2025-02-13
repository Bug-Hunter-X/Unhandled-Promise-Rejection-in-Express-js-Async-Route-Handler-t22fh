const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling inside the then block
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // In real applications, this could be database access, file I/O, etc.
  const success = Math.random() < 0.5;
  if (success) {
    return;
  } else {
    throw new Error('Simulated asynchronous operation failed.');
  }
}