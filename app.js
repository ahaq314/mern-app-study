const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json()); //MIDDLEWARE: This is a middleware function that parses incoming JSON requests and makes the data available in req.body.

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

app.post('/api/v1/tours', (req, res) => {
  const newId = x[x.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  x.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(x, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 'error',
          message: 'Failed to save tour data',
        });
      } else {
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
      }
    },
  );
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
