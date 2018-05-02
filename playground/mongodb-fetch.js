// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); //will return id like mongodb id

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').find().toArray().then((docs) => {
    //     console.log('Todos: \n');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // });

    db.collection('User').find({
        name: 'Abhinav Kumar'
    }).toArray().then((docs) => {
        console.log('Users: \n');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos')
    });

    // db.collection('Todo').find().count().then((count) => {
    //     console.log('Todos Count: '+count);
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // });

    // db.close();
});