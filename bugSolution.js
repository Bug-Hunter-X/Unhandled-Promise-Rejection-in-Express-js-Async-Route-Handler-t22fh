const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Simulated asynchronous operation failed.');
  }
}