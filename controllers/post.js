const Post = require('../models/post');

exports.getPosts = (req, res) => {
    const posts = Post.find().select('_id title body')
    .then(data => res.json({data}))
    .catch(error => res.status(405).json({error}));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => res.json({result}));
};