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
router.post('/create/:idUser', async (req, res) => {
    const {phrase, backgroundColor} = req.body;
    const post = new Post({phrase, backgroundColor, 'user' : req.params.idUser});
    await post.save();
    res.json({status: 'Post guardado'});
});

//Actualiza un post
router.put('/update/:id', async (req, res) => {
    const {phrase, backgroundColor } = req.body;
    const newPost = {phrase, backgroundColor};
    await Post.findByIdAndUpdate(req.params.id, newPost);
    res.json({status: 'Tarea actualizada'});
});

//Elimina un post
router.delete('/delete/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'});
});

//Reaccion a un post un post
router.put('/like/:id/:idUser', async (req, res) => {
    const post = await Post.findById(req.params.id);
    console.log(post.likes);
    var index = post.likes.indexOf(req.params.idUser);
    if (index != -1) {
        post.likes.splice(index,1);
    }else{
        post.likes.push(req.params.idUser);
    }
    await post.save();
    res.json({status: 'Like guardado'});
});

//Comentario a un post un post
router.put('/comment/:id/:idUser', async (req, res) => {
    const post = await Post.findById(req.params.id);
    console.log(post.comments);
    var flag = true;
    for (let index = 0; index < post.comments.length; index++) {
        const comment = post.comments[index];
        if (comment.userId == req.params.idUser) {
            comment.texts.push(req.body.comment);
            flag = false;
            break;
        }
    }
    if (flag){
        var comment = { userId : req.params.idUser, texts: [req.body.comment]}
        post.comments.push(comment);
    }
    await post.save();
    res.json({status: 'Comentario guardado'});
});

module.exports = router;