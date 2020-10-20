const mongoose = require('mongoose');
require("dotenv").config()

const mongoURI = process.env.MONGO_DB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
