const express = require('express');
const {getPosts, createPost} = require('../controllers/post');
const {createPostValidator} = require('../validator');

const router =  express.Router();

router.get('/corona', getPosts);
router.post('/corona/create', createPostValidator, createPost);

module.exports = router;