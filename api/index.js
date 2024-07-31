require('dotenv').config();
const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const mailRoutes = require('./routes/mailRoutes');
const exampleRoutes = require('./routes/exampleRoutes');
const otpRoutes = require('./routes/otpRoutes');
//const authRoutes = require('./routes/authRoutes');
//const userRoutes = require('./routes/userRoutes');
//const errorHandler = require('./utils/errorHandler');

const app = express();

// Database connection
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('MongoDB connected'))
//  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
//require('./config/passport')(passport);

// Routes
//app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);
app.use('/', exampleRoutes);
app.use('/api/mail', mailRoutes);
app.use('/api/otp', otpRoutes);
// Existing code


// Routes
//app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);


// Existing code


// Error handling
//app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
