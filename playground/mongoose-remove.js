const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });


Todo.findOneAndRemove({_id: '5ae9eda51044096951f1ea13'}).then((doc) => {
    console.log(JSON.stringify(doc, undefined, 4));
});

// Todo.findByIdAndRemove('5ae9eda51044096951f1ea13').then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 4));
// })