// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); //will return id like mongodb id

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').findOneAndUpdate({
    //     text: 'Task 1'
    // }, {
    //     $set: {
    //         completed: false
    //     }
        
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err) => {
    //     console.log('Error updating document', e);
    // });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5ae80d2487784448e38238e0')
    }, {
        $set: {
            name: 'Abhinav Kumar'
        },
        $inc: {
            age: -2
        }        
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('Error updating document', e);
    });

    // db.close();
});