const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//endpoint for /api/posts

// POST request to add a new blogpost
router.post('/', withAuth, async (req, res) => {
    try {
        console.log('i got here');
        console.log(req.body);
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;