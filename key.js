const express = require("express");
const key = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require("./database/Question");

connection
    .authenticate()
    .then(() =>{
        console.log("Connection made to database!")
    })
    .catch((error) =>{
        console.log(error)
    })


key.use(express.static('public'))

key.use(bodyParser.urlencoded({extended: false}))
key.use(bodyParser.json())

key.get("/", function(req, res) {
    res.send("<h1>Main page</h1>")
})

key.get("/page", function(req, res){
    res.sendFile(__dirname + "/src/Form.html")
})

key.post("/save", function(req, res){

    var first = req.body.first;
    var last = req.body.last;
    var country = req.body.country;
    var city = req.body.city;
    var textarea = req.body.textarea;
    
    Question.create({
        first: first,
        last: last,
        country: country,
        city: city,
        textarea: textarea
    }).then(()=>{
        res.redirect("/")
    })
    
    // res.send("<h1>Data send!</h1>")
})


key.listen(8080, function(error){
    if(error){
        console.log("There's something wrong...")
    } else{
        console.log("Everything is working perfectly!")
    }
})