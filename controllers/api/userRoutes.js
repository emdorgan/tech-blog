const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({where: {username: req.body.username} });

    if(!userData){
      res.status(400).json( {messsage: "No user found with that username"} );
      return;
    }

    const validatePassword = await userData.checkPassword(req.body.password);

    if(!validatePassword){
      res.status(400).json( {message: 'Invalid password'} )
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({user: userData, message: 'You are logged in!'})
    })

  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/logout', async (req, res) => {
  try {
    if(req.session.logged_in){
      req.session.destroy(() => res.status(204).end())
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;