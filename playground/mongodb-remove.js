// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); //will return id like mongodb id

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany
    // db.collection('Todo').deleteMany({
    //     text: 'Task 5'
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todo').deleteOne({
    //     text: 'Task 5'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todo').findOneAndDelete({
    //     text: 'Task 4'
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });
    
    // db.collection('User').deleteMany({
    //     name: 'Abhinav Kumar'
    // }).then((result) => {
    //     console.log(JSON.stringify(result.result, undefined, 2));
    // });

    db.collection('User').findOneAndDelete({
        _id: new ObjectID('5ae801fa8b48c340ee907bf4')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});