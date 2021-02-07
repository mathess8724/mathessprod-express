// imports
var express =require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var apiRouter=require('./apiRouter').router;
const { json } = require('body-parser');
var moment = require('moment');
var cors = require('cors');

// Instantiate seerver
var app = express();
app.use(cors());

// visits counter
let startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
let counter = 0;
let captchaRequests = 0;


app.get('/', function(req, res) {
    counter ++;
    console.log('new get request')

    res.send('hello world server running!');
    
 /*    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<h4>Server is running . . .</h4><br>
    <p>Start running at  ${startTime}</p><p>visits: ${counter}<p/>
    <br><br><div>captcha requests : ${captchaRequests}</div>`); */
});

app.route('/api/captcha')
  .get(function (req, res) {
      console.log('new get request');
      error = {msg: 'for check a captcha, please, use post method',
                err: 'method error'};
      res.status(400).json(error);
      
  })
  .post(function (req, res) {
  

    })       
  .put(function (req, res) {
    res.send('Update the book')
  })

  app.listen(8080, function() {
    console.log('Server is listenning on port 8080 . . .');
})

