const express = require('express');
const app = express();

require('./main')();

const routes = require('./Route/root')

const User = require('./User');
const { default: mongoose } = require('mongoose');

async function test() {
    try{
        const user1 = await User.create({
            name : "Kim",
            age : 20
        })
        console.log(user1)
    }
    catch{
        console.log(err)
    }
}

// test();

async function findUser() {
    const searchUser = await User.findById('692167f800bb390ebefc0475')
    console.log(searchUser)
}

// findUser();

async function updateUser(){
    try{
        const updateUser = await User.updateOne({name : "Tushar"}, {age : 26})
        console.log(updateUser)
    }
    catch(err){
        console.log(err)
    }
}
// updateUser()

async function deleteOne(){
    try{
        const deleteUser = await User.deleteMany({name : "Kim"})
        console.log(deleteUser)
    }
    catch(err) {
        console.log(err)
    }
}
// deleteOne();

app.use(express.json())

app.use('/', routes )

app.listen(3000, () => {
    console.log("Listening to port 3000")
})