const express = require("express");

const app = express();

const http = require("http").createServer(app);

const fs = require("fs");

var words = fs.readFileSync("randomwords.txt","utf8");

words = words.split('\n');

app.get('/', function(req,res) { 
  var wordamt = req.query.amount;
  if(wordamt == undefined) {
  res.send(`<!DOCTYPE HTML>
  <html><body><head><title>Random Words Generator</title><style>
  body{
    font-family: Calibri;

    color: #230096;

    font-size: 2em;

    background-color: #b8a1ff; background-image: url(background.jpg);
  }

  a{
    color: #96005a;

    text-decoration: none;
  }

  a:hover{
    text-decoration:underline;
  }
  </style></head>
  <center><h2>Random Words Generator by SilentSerenity</h2><br>
  This Javascript code was made as a fun project, and it generates random words. How it works is that after this link, type in "/?amount=x", where "x" must be equal to an integer.<br><br>
  You can use this one as a test, it will generate 7 random words!<br><a href="https://Random-Words-Generator.silentserenity.repl.co/?amount=7">Generate seven Random Words!!</a></body></html>`);
  } else {

    res.send(RandomWordGenerator(wordamt))

  }
})

function RandomWordGenerator(amt){

  let randomword = "Here are the Random Words!\t";

  for(let x = 0 ; x < amt ; x++) {
    randomword += words[Math.floor(Math.random()*words.length)];
  }

  return randomword;

}

http.listen(8080,function(){

  console.log("Random Words Generation is a go!");

})
