// Routes imports
const postRoute = require('./routes/post');
// Core NodeJs imports
const expressValidator = require('express-validator');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => console.log('DB connection error'.concat(err.message)))

const app = express();
// Middleware
app.use(cors());
app.use(expressValidator())
app.use(morgan('dev'));
app.use(bodyParser.json())
app.options('*', cors());
app.use('/', postRoute);

const port = process.env.PORT;
app.listen(port, () => console.log('NodeJs API running on port '.concat(port)));
