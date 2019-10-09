// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('5d9cba7c9609103955d38acb') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 43 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 43 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection('tasks').findOne(
      { _id: new ObjectID('5d9ca11c75b14538219d07ad') },
      (error, task) => {
        if (error) {
          return console.log('Error!');
        }

        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Error!');
        }

        console.log(tasks);
      });
  }
);
