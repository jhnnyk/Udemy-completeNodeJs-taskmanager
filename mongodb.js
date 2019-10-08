// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.toHexString());

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
    //     name: 'Vikram',
    //     age: 26
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

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'buy milk',
    //       completed: false
    //     },
    //     {
    //       description: 'fix door trim',
    //       completed: false
    //     },
    //     {
    //       description: 'cook dinner',
    //       completed: true
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
