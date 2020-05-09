const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//-----------------------------------------GET ROUTE-----------------------------------------------------------
app.get('/webhook/', function(req, res) {
    res.send(req.query['hub.challenge']); 
});

app.get('/ues_intent/:type', function(req, res) {

        var type = req.params.type;
        require('./intents/uesIntent').get_all_ues(type, function(cb){ 
            
        res.json([{text: cb}]);  
       
        });
    
    });
app.get('/more_info/:type', function(req, res) {

        var type = req.params.type;
        require('./intents/uesIntent').get_ue_info(type, function(cb){ 
            
        res.json([{text: cb}]);  
       
        });
    
    });
app.get('/profs_intent/:type', function(req, res) {

        var type = req.params.type;
        require('./intents/tutorsIntent').profs(type, function(cb){ 
            
        res.json([{text: cb}]);  
       
        });
    
    });
app.get('/all_details/:prof', function(req, res) {

        var prof = req.params.prof;
        require('./intents/tutorsPlusUesIntent').get_ue_prof_info(prof, function(cb){ 
            
        res.json([{text: cb}]);  
       
        });
    
    });
app.get('/my_group/:student_name', function(req, res) {

        var student_name = req.params.student_name;
        require('./intents/studentsPlusGroupsIntent').get_student_group(student_name, function(cb){ 
            
        res.json([{text: cb}]);  
       
        });
    
    });


//-----------------------------------------listening_channel-----------------------------------------------------------
const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
