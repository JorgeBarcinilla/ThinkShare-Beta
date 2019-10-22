const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const {name,lastname,email,username,password} = req.body;
    const user = new User({name,lastname,email,username,password});
    await user.save();
    res.json({status: 'User guardado'});
});

router.put('/:id', async (req, res) => {
    const {name,lastname,email,username,password} = req.body;
    const newUser = {name,lastname,email,username,password};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User actualizado'});
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User eliminado'});
});

module.exports = router;