const fs = require('fs');
const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.json({ message: 'Hello, World!', status: 'success' });
// });

// app.post('/', (req, res) => {
//   res.json({ message: 'POST request received', status: 'success' });
// });

const x = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: x,
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
