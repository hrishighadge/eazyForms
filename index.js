var express = require('express');
const formData = require('./views/data/formData.json');
var bodyParser = require('body-parser');
// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';
// const client = require('twilio')(accountSid, authToken);

var app = express();

var port = 5000;

app.use(express.static(__dirname + '/views')); 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json());

app.get('/forms/:id', function (req, res) {
    if(req.params.id >= formData.length){
        res.render('notfound');
    }
    else{
    res.render('index',
        {
            title: "WhatsApp Forms",
            formData: formData[req.params.id]
        });
    }
});

app.post('/formData', function(req, res, next){
    var message = JSON.stringify(req.body);
    console.log(message.substring(1,message.length-1));
    // client.messages
    //   .create({
    //      from: 'whatsapp:+14155238886',
    //      body: 'Hello there!',
    //      to: 'whatsapp:+15005550006'
    //    })
    //   .then(message => console.log(message.sid));
    res.render('success');
 });

app.listen(port, function (err) {
});
