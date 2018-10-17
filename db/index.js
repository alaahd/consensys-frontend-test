const mongoose = require('mongoose');
// 27017 is the default port for connecting to MongoDB
// tasks is the name of our database
const mongoUri = 'mongodb://localhost:27017/tasks';
// Connect Mongoose to our local MongoDB via URI specified above and export it below
 mongoose.connect(mongoUri, { useNewUrlParser: true, 

  useCreateIndex: true
 });

const db = mongoose.connection;

db.on('error', function(err) {

  console.log('mongoose connection error'+ err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = db;