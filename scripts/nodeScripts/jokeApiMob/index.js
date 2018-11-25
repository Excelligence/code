
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const details= require('./details')
const Quotes= require('./db')
mongoose.connect(details.mlabDet);
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
//app.use(function (req, res) {
  //res.setHeader('Content-Type', 'text/plain')
  //res.write('you posted:\n')
  //res.end(JSON.stringify(req.body, null, 2))
//})
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/addQuote',function(req,res){
Quotes.create(req.body, function (err) {
  if (err) console.log(err);
  // saved!
})
})
app.get('/searchAuthor', function (req, res) {
  res.sendFile(path.join(__dirname,'searchAuthor.html'))
})
app.post('/searchAuthor',function (req,res){

	Quotes.find({author : req.body.searchQuery},function(err,docs){
    docs.forEach(function(doc){
    console.log(doc.quote)
  })
	})
})
app.listen(3000)
