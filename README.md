// README.md
# Project Support
### Introduction
Project Support is an open source platform that enable users share posts they're passionate about and actively involved with with the hopes of connecting with other users equally interested in working with them on the given post.
### Project Support Features
* Users can signup and login to their accounts
* Public (non-authenticated) users can access all posts on the platform
* Authenticated users can access all posts as well as create a new post, edit their created post and also delete what they've created.
### Installation Guide
* Clone this repository [here](https://github.com/DucSilva/project-support.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 7066.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/user/signup | To sign up a new user account |
| POST | /api/user/login | To login an existing user account |
| POST | /api/posts | To create a new post |
| GET | /api/posts | To retrieve all posts on the platform |
| GET | /api/posts/:postId | To retrieve details of a single post |
| PUT | /api/posts/:postId | To edit the details of a single post |
| DELETE | /api/posts/:postId | To delete a single post |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### Authors
* [DucSilva](https://github.com/DucSilva)
* ![alt text](https://github.com/DucSilva/project-support)
### License
This project is available for use under the MIT License.