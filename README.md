# Captured Content

Captured Content is a website created to allow users a place to find inspiration through images based on what the users decide to search for or which category is selected.


## Installation

Once the repo is cloned into your vscode. Use 'nodemon server.js' in your terminal to run the local host port to start the server.

```bash
nodemon server.js
```

## Terminal

```
[nodemon] starting `node server.js`
The server is running on port http://localhost:9080
```

## Technologies Used

Nodemon, 
NodeJs,
Express,
Ejs,
MongoDB,
Bootstrap
Unsplash API,
JQuery


## Page Breakdowns


Home // Index.ejs– This is the home page that is called for when running the server, it is where users can search for anything, and it will render images from the unsplash API. This page also allows for users to hover over images and see what was used to capture the image as well as who captured the image. Each image when clicked on will redirect you to that specific image.

About // Views.ejs – This is where users can learn a little bit behind the concept of the website as well as the creator.

Categories // Category.ejs – This is where users will be prompted with a dropdown that lists a numerous amount category that connects to the unsplash API which renders images based on selection.

Blogs // blog.ejs – This is where users can find different blogs that might pique their interest. When each blog image is hovered over, the title as well as the author of each blog will be displayed. When clicked on it will redirect you to that specific blog!
