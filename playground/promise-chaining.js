require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5da0832ff3af4b2c58318b4c', { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
