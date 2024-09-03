const express = require('express');
const router = express.Router();
const sendMail = require('../config/mail');

// Example GET route
router.get('/', async (req, res) => {
  const exampleData = { id: 1, name: 'Example' };
  try {
    // Send OTP via email
    await sendMail("oyerindei13@gmail.com", `Payment notification`, `a payment was made`);

    // Send response after successful email sending
    res.status(200).json(exampleData);
  } catch (error) {
    // Send error response if something goes wrong
    res.status(500).json({ msg: 'An error occurred' });
  }
});

// Example POST route
router.post('/', async (req, res) => {
  const data = req.body; // Assuming you're sending JSON data
  const exampleData = { id: 1, name: 'Example' };

  console.log("Request received");
  console.log(`Data: ${JSON.stringify(data)}`);

  try {
    // Send OTP via email
    await sendMail("oyerindei13@gmail.com", `Payment notification`, `a payment was made`);

    // Send response after successful email sending
    res.status(200).json({ message: 'Data received', data });
  } catch (error) {
    // Send error response if something goes wrong
    res.status(500).json({ msg: 'An error occurred' });
  }
});

module.exports = router;
