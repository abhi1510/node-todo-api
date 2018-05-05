const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// this is used to remove all docs
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// // this return the doc which was removed
// Todo.findOneAndRemove({_id: '5ae9eda51044096951f1ea13'}).then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 4));
// });

// // this takes doc id and also returns the removed doc 
// Todo.findByIdAndRemove('5ae9eda51044096951f1ea13').then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 4));
// });