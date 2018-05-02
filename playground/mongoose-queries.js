const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6ae9e42c902dc323444cac98';

// Todo.find({ // //returns array
//     _id: id
// }).then((todos) => {
//     console.log('Todos');
//     console.log(JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({ //returns single object
//     _id: id
// }).then((todo) => {
//     console.log('Todo');
//     console.log(JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('Id not found');
//         return
//     }
//     console.log('Todo by Id');
//     console.log(JSON.stringify(todo, undefined, 2));
// }).catch((e) => {
//     console.log(e);
// });

if(!ObjectID.isValid(id)) {
    console.log('Invalid Id');
} else {
    console.log('Valid Id');
}

// query user collection: User.findById()
// handle 3 cases: User not found, User found, Handle Errors

User.findById('5ae9e79ce2d16728488d4336').then((user) => {
    if(!user) {
        console.log('User not found');
        return
    }
    console.log(JSON.stringify(user, undefined, 4));
}).catch((e) => {
    console.log('An error occured');
})

