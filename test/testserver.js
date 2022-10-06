//mongodb connection
//test server connection 
//test server works + information doesn't store in database



var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb+srv://ocarrion:ocarrion123@capturecontent.zqwmznv.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true})

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;

    var data = {
        "name": name,
        "email" : email,
        "phone": phone,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(8080);


console.log("Listening on PORT 8080");






