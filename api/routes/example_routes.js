const express = require('express');
const router = express.Router();


// Example GET route
router.get('/', (req, res) => {
  // Fetch or process data here
  const exampleData = { id: 1, name: 'Example' };
  res.status(200).json(exampleData);
});

// Example POST route
router.post('/', (req, res) => {
  const data = req.body; // Assuming you're sending JSON data
  // Process the data here
  res.status(201).json({ message: 'Data received', data });
});


module.exports = router;
