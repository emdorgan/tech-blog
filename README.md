# Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## To-do list

* Outline database tables and their respective keys
* Figure out the models for Users, Blogposts and Comments
* Write a bit of seed data
* Set up the front end login page
* Set up the front end blogpost
* Set up the front end comments
* Set up the routes for loggin
* Set up the routes for posting/commenting


## Getting Started

## Database Model

* `User`

    * `id`

        * Integer
        * NOT NULL
        * Primary Key
        * Auto-increment
    
    * `username`
        * String
        * Not NULL
        * Must be unique

    * `password`
        * String
        * Not NULL
        * Validation: len[8] (can't be less than 8 characters)

* `Post`
    * `id`
        * Integer
        * Not Null
        * Primary Key
        * Auto-increment
    
    * `title`
        * String
        * Not NULL
    
    * `post_text`
        * text
        * Not NULL
    
    * `post_date`
        * Date
        * Not NULL
    
    * `user_id`
        * Integer
        * References the `User` model's `id`

* `Comment`
    * `id`
        * Integer
        * Not NULL
        * Primary Key
        * Auto-increment
    
    * `comment_text`
        * text
        * Not NULL
    
    * `comment_date`
        * Date
        * Not NULL
    
    * `user_id`
        * Integer
        * References the `User` model's `id`

    * `post_id`
        * Integer
        * References the `Post` model's `id`

## Deployed Link



## Screenshots


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [MySQL2 package](https://www.npmjs.com/package/mysql2)
* [Insomnia](https://insomnia.rest/)
* [Sequelize](https://sequelize.org/)


## Authors

* **Emily Dorgan** 

- [Link to Portfolio Site](https://emdorgan.github.io/updated-portfolio/)
- [Link to Github](https://github.com/emdorgan)
- [Link to LinkedIn](https://www.linkedin.com/in/emily-dorgan/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)