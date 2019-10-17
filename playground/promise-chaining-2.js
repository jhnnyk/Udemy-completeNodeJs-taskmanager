require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5da618a8ac8c0b688c1eb034')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => console.log(e));

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5da616fb4dc95c686e579ec3')
  .then(count => console.log(count))
  .catch(e => console.log(e));
