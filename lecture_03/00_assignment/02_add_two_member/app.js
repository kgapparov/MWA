const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({extended: true}));

app.get("/:number1", function(req, res){
    let number1 = req.params.number1 ? parseInt(req.params.number1, 10) : 0;
    let number2 = req.query.number2 ? parseInt(req.query.number2, 10) : 0;
    let sum = number1 + number2;
    
    res.status(200).send("sum =" + sum);
})


const server = app.listen(process.env.PORT, function(){
    console.log("Server started at port " + server.address().port);
})