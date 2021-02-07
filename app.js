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
  app.listen(process.env.PORT, '0.0.0.0');
  console.log('listenning port ' + process.env.PORT);
  const argv = require('yargs').argv;

//const port = argv.port || 8081;
var port = process.env.PORT || 3002

app.listen(port, ()=>{
    console.log('Probably listening to heroku $PORT now ', port); // unless $PORT is undefined, in which case you're listening to 8081.
});
/*   app.listen(config.port, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  }); */
/* 

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
}); */
 /*  app.listen(process.env.PORT || 8080, function() {
    console.log('Server is listenning on port'+ process.env.PORT );
}) */

