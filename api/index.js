require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const mailRoutes = require('./routes/mail_routes');
const exampleRoutes = require('./routes/example_routes');
const otpRoutes = require('./routes/otp_routes');
const webhooks = require('./routes/webhooks_routes');
//const authRoutes = require('./routes/authRoutes');
//const userRoutes = require('./routes/userRoutes');
//const errorHandler = require('./utils/errorHandler');

const app = express();

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  };

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
app.use('/api', exampleRoutes);
app.use('/api/mail', mailRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/webhook', webhooks);
// Existing code


// Routes
//app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);


// Existing code


// Error handling
//app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//https.createServer(sslOptions, app).listen(3000, () => {
//    console.log('Express app running on https://localhost:3000');
//  })
