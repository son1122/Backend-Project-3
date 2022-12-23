const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/', ctrl.users.home);
router.get('/signup', ctrl.users.signUp);
router.get('/login', ctrl.users.logIn);
router.post('/login', ctrl.users.logInfunc);
router.post('/signup', ctrl.users.newUser);
router.get('/profile/:index', ctrl.users.show);
router.delete('/profile/:index', ctrl.users.removeUser);
router.put('/profile/:index', ctrl.users.editUser);



module.exports = router