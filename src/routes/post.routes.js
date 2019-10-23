const express = require('express');
const router = express.Router();

const Post = require('../models/post');

//Todos los posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

//El post de un id determinado
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

//Crea un post
router.post('/:id', async (req, res) => {
    const {phrase, backgroundColor} = req.body;
    const post = new Post({phrase, backgroundColor, 'user' : req.params.id});
    await post.save();
    res.json({status: 'Post guardado'});
});

//Actualiza un post
router.put('/:id', async (req, res) => {
    const {phrase, backgroundColor, } = req.body;
    const newPost = {phrase, backgroundColor};
    await Post.findByIdAndUpdate(req.params.id, newPost);
    res.json({status: 'Tarea actualizada'});
});

//Elimina un post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'});
});

module.exports = router;