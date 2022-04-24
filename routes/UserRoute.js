const express = require('express');
const { getUsers, getUserById, postUser, updateUser, deleteUser } = require('../controllers/UserController');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
