const express = require('express');
const { check, validationResult } = require('express-validator');
const { sendEmail } = require('../controllers/mailController');
const router = express.Router();

router.post(
  '/',
  [
    check('to', 'Please include a valid email').isEmail(),
    check('subject', 'Subject is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  sendEmail
);

module.exports = router;
