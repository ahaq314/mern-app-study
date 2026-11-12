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

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1; // Convert string to number
  const tour = x.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: 'Tour not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
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
        return res.status(500).json({
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

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = x.findIndex((el) => el.id === id);

  if (tourIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Tour not found',
    });
  }
  Object.assign(x[tourIndex], req.body);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(x, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: 'error',
          message: 'Failed to update tour data',
        });
      } else {
        res.status(200).json({
          status: 'success',
          data: {
            tour: x[tourIndex],
          },
        });
      }
    },
  );
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
