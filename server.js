const express = require('express');
const connectDB = require('./config/db');
const { connect } = require('./routes/auth');

const app = express();

// Connect database

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.send({ msg: 'Welcome to the ContactKeeper API' })
);

// Define all the routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
