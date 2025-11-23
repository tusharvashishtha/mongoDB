const User = require('../User')

const express = require('express');
const router = express.Router();
const {createUser} = require('../Controller/userController')

router.post('/user/create', createUser)

module.exports = router;