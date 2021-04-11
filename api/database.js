/* Mongoose Import  */
const mongoose = require('mongoose');

/* Set Mongoose Default Configurations  */
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const MONGODB_URI = 'mongodb://localhost/eight_lab_db'
/* Mongoose Database Connection  */
mongoose.connect(MONGODB_URI).then(() => console.log('Connected to eight_lab_db DB'))
  .catch((error) => console.error(error));
