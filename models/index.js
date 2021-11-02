const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// users can have many posts

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Posts belong to users 

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Users can have many comments

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// comments belong to users

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// comments belong to posts

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// posts can have many comments

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = {User, Post, Comment};