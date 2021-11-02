const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

// GET rout for the homepage, displays all blogposts

router.get('/', async (req, res) =>{
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        });

    const posts = postData.map((post) => post.get({plain: true}));
    res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// GET route for when a user clicks on a blogpost
router.get('/post/:id', async (req, res) => {
    try {
        const blogPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['comment_text', 'date_created', 'commenter'],
                },
            ],
        });
        const blogPost = blogPostData.get({ plain: true });
        console.log(blogPost);
        res.render('blogpost', {
            blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET route for the user's dashboard. Only happens with authorization, fetches the matching user's blogposts
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{model: Post}],
        });

        const user = userData.get({ plain: true });
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET route for the new blogpost route

router.get('/dashboard/new', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
        });

        const user = userData.get({ plain: true });
        res.render('newpost', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET route that just checks if the user is logged in
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;