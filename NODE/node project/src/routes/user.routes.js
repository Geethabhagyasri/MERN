const express = require('express')
const router = express.Router()//router and express methods are used for routing(redirecting)
const userController = require('../controllers/user.controllers');//..indicates previousfolder
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/', userController.create);
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);
// Delete a user with id
router.delete('/:id', userController.delete);
module.exports = router