// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); //will return id like mongodb id

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todo').insertOne({
        text: 'Task 2',
        completed: true
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('User').insertOne({
    //     name: 'Abhinav Kumar',
    //     age: 25,
    //     location: 'Bangalore, Karnataka'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.close();
});