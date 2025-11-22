const express = require('express');
const app = express();

require('./main')();

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

findUser();