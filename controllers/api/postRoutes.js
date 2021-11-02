const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//endpoint for /api/posts

// POST request to add a new blogposts
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE request for removing blogposts

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where:{
                post_id: req.params.id
            }
        })
        const postData = await Post.destroy({
            where:{
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({message: 'No post found with that id'})
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

// UPDATE route for updating posts

router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log(req.body);
        const postData = await Post.update({
            post_text: req.body.post_text
            },
            {
                where: {id: req.params.id}
            })
        if (!postData) {
            res.status(404).json({message: 'No post found with that id'})
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;