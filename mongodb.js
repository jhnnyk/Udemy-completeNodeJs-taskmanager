const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'John',
    //     age: 43
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 57
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          description: 'buy milk',
          completed: false
        },
        {
          description: 'fix door trim',
          completed: false
        },
        {
          description: 'cook dinner',
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks');
        }

        console.log(result.ops);
      }
    );
  }
);
