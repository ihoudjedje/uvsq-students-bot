const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiai = require('apiai');
const apiaiApp = apiai('6d1be483fdf845c79b870ede252c940e');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//-----------------------------------------GET ROUTE-----------------------------------------------------------
app.get('/', function(req, res) {
    res.send(req.query['hub.challenge']); 
});

//-----------------------------------------POST ROUTE-----------------------------------------------------------
app.post('/', function(req, res) {
  var messaging_events = req.body.entry[0].messaging;
  for (var i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    if (event.message && event.message.text) { //event.sender.id to get the id of the sender 
      sendMessage(event);
    }
  }
  res.end('received!');
});


var text, sender;
function sendMessage(event) {
  sender = event.sender.id;
  text = event.message.text;

  var apiai = apiaiApp.textRequest(text, {
    sessionId: 'ilyes_bot_on'
  });


  // Got a response from api.ai. Let's POST to Facebook Messenger
  apiai.on('response', (response) => {
      if(response.result.metadata.intentName == "Module d'un prof"){
      var name_prof = response.result.parameters.any;
             
        require('./intents/tutorsPlusUesIntent').get_ue_prof_info(name_prof, function(cb){ 
                     
        send_reply(cb);  
       
        });
        }else if(response.result.metadata.intentName == "Tous les modules"){
        
        var type = response.result.parameters.UEs_all;
        require('./intents/uesIntent').get_all_ues(type, function(cb){ 
                     
        send_reply(cb);  
       
        });
        
        }else if(response.result.metadata.intentName == "Tout les Profs"){
        
       // require('./intents/tutorsIntent').profs("all", function(cb){ 
        request.get(`http://48330379.ngrok.io/enseignants`, function(err, res){  
        console.log(res.body);
        //send_reply(cb);  
       
        });
        
        }else{
        var aiText = response.result.fulfillment.speech;
        send_reply(aiText);            
   }
   });
    
    apiai.on('error', (error) => {
    console.log(error);
  });

  apiai.end();
  
}

//-----------------------------------------listening_channel-----------------------------------------------------------
const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

//-----------------------------------------reply_message-----------------------------------------------------------
function send_reply(message){
        request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {
        access_token: "EAAGNVq4KwhEBAO7JGxuz7ZAl6QhjZAQZAMIWac7JTT3w6vbBafLhqebL0ZBZBZBjlJdTz4IASfvBmIpleZCWDTysKx309SWThRl6PiXdXagop74rGaZAkN5uMRfIZCCero1HlW99TC6NCYaqWK1qZBalqDG1XCOjSautPxejH2vSNT4wZDZD"
      },
      method: 'POST',
      json: {
        recipient: {
          id: sender
        },
        message: {
          text: message,
        }
      }
    }, (error, response) => {
      if (error) {
        console.log('Error sending message: ', error);
      }
    });
}