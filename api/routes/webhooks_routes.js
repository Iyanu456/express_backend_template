const express = require('express');
const router = express.Router();
const sendMail = require('../config/mail');


// Example GET route
router.get('/', async (req, res) => {
  // Fetch or process data here
  const exampleData = { id: 1, name: 'Example' };
  try {
    // Store OTP in memory or database
    //const otpEntry = new OTP({ email, otp });
    //await otpEntry.save();

    // Send OTP via email
    await sendMail("oyerindei13@gmail.com", `Payment notification`, `a payment was made`);

    res.status(200).json(exampleData);
  } catch (error) {
    res.status(500).json({ msg: 'an error occured' });
  }
  //res.status(200).json(exampleData);
});

// Example POST route
router.post('/', async (req, res) => {
  const data = req.body; // Assuming you're sending JSON data
  // Process the data here
  console.log("request recieved")
  console.log(`data: ${data}`)
  try {
    // Store OTP in memory or database
    //const otpEntry = new OTP({ email, otp });
    //await otpEntry.save();

    // Send OTP via email
    await sendMail("oyerindei13@gmail.com", `Payment notification`, `a payment was made`);

    res.status(200).json(exampleData);
  } catch (error) {
    res.status(500).json({ msg: 'an error occured' });
  }
  res.status(201).json({ message: 'Data received', data });
});


module.exports = router;
