# Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a full stack application with a fully functional MySQL database that allows the user to create an account, sign into an existing account, make blogposts, add comments to existing blogposts, update blogposts and even delete blogposts. The database has been seeded with some example data.

## Getting Started

* Navigate to the login to make an account
* Once you sign up, you'll be automatically logged in
* Go to your dashboard to make a new post, or navigate to an existing post to add a comment

## Deployed Link

[See Site Live!](https://pacific-beach-72333.herokuapp.com/)

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

## Screenshots



## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [MySQL2 package](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://sequelize.org/)
* [Handlebars](https://handlebarsjs.com/)


## Authors

* **Emily Dorgan** 

- [Link to Portfolio Site](https://emdorgan.github.io/updated-portfolio/)
- [Link to Github](https://github.com/emdorgan)
- [Link to LinkedIn](https://www.linkedin.com/in/emily-dorgan/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)