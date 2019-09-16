const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const { getPosts, newPost } = require('../controllers/post');

/* GET posts index /posts */
router.get('/', errorHandler(getPosts));

// GET posts new /posts/new 
router.get('/new', newPost);

//POST posts create /posts
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
});

// GET posts show /posts/:id
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
});

//GET posts edit /posts/:id/edit
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
});

//PUT posts update /posts/:id
router.get('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

//DELETE posts destroy /posts/:id
router.get('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id'); 8
});

module.exports = router;

/*
GET index            /posts
GET new             /posts/new
POST create         /posts
GET show            /posts/:id
GET edit            /posts/:id/edit
PUT update          /posts/:id
DELETE destroy      /posts/:id
*/