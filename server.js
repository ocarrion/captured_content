// nodejs express
//local host server

const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 9080;

app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render('index', {title: 'CAPTURED CONTENT'})
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/blog", (req, res) => {
    res.render('blog')
})

app.get("/category", (req, res) => {
    res.render('category')

})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})



