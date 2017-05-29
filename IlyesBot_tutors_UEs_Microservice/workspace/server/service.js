'use strict';
const express = require('express');
const app = express();
var request = require('superagent');


var list_profs_ues = [
    {
    "id_prof": 1,
    "id_ue": 3   
    },
    {
    "id_prof": 2, 
    "id_ue": 4
    },
    {
    "id_prof": 3,
    "id_ue": 5
    },      
    {
    "id_prof": 4, 
    "id_ue": 6
    },
    {
    "id_prof": 5, 
    "id_ue": 7
    },
    {
    "id_prof": 6, 
    "id_ue": 2
    },
    {
    "id_prof": 7, 
    "id_ue": 1
    }
];


app.get('/service/:name_prof', (req, result) => { 
    
            request.get(`http://localhost:5020/service/${req.params.name_prof}`, function(err, res){
            console.log("id_prof" + res.body);
            var result_prof_id = res.body;
            var result_ue_id; 
                
            for (var i = 0; i < list_profs_ues.length; i++){
                if (list_profs_ues[i]["id_prof"] == result_prof_id){    
                result_ue_id = list_profs_ues[i]["id_ue"];
                }}
            console.log("id_ue" + result_ue_id);
            console.log(typeof result_ue_id);

            request.get(`http://localhost:5030/service/${result_ue_id}`, function(err, res){

                if(err || res.body == ""){
            
                return result.json("Dèsolé!, "+ req.params.name_prof +" n\'existe pas dans ma base!");

            
                }else{
              //  return callback(JSON.stringify([{text: final_result_string}]));
                return result.json(res.body);
             //   return callback.json({text: res.body.text});
              //  console.log(`Nom : ${req.params.name_prof} \n${res.body.text}`);
             //   return res.json({text: res.body.text});
                }
             });
           
        });

    });


module.exports = app;

const server = app.listen(process.env.PORT || 5040, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});