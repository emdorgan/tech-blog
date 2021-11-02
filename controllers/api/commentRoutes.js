const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// endpoint for /api/comments

// POST request to add a new comment

router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.body);
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            commenter: req.session.username 
        });
        res.status(200).json(newComment);

    } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;