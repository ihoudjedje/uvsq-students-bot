'use strict';
const express = require('express');
const app = express();
var request = require('superagent');


var list_students_groups = [
    {
    "id_student": 7,
    "id_group": 10  
    },
    {
    "id_student": 1, 
    "id_group": 10
    },
    {
    "id_student": 2,
    "id_group": 10
    },      
    {
    "id_student": 3, 
    "id_group": 10
    },
    {
    "id_student": 4, 
    "id_group": 10
    },
    {
    "id_student": 5, 
    "id_group": 10
    },
    {
    "id_student": 6, 
    "id_group": 10
    },
    {
    "id_student": 8, 
    "id_group": 10
    },
    {
    "id_student": 9, 
    "id_group": 10
    },
    {
    "id_student": 10, 
    "id_group": 34
    },
    {
    "id_student": 11, 
    "id_group": 34
    },
    {
    "id_student": 12, 
    "id_group": 34
    },
    {
    "id_student": 13, 
    "id_group": 34
    },
    {
    "id_student": 14, 
    "id_group": 34
    },
    {
    "id_student": 15, 
    "id_group": 21
    },
    {
    "id_student": 16, 
    "id_group": 21
    },
    {
    "id_student": 17, 
    "id_group": 21
    },
    {
    "id_student": 18, 
    "id_group": 34
    },
    {
    "id_student": 19, 
    "id_group": 34
    },
    {
    "id_student": 20, 
    "id_group": 34
    },
    {
    "id_student": 21, 
    "id_group": 21
    }
];


app.get('/group/:student_name', (req, result) => { 
    
            request.get(`http://localhost:5050/return_student_id/${req.params.student_name}`, function(err, result1){
            if(err || result1.body == ""){

                 return result.json("Dèsolé!, je t'ai pas trouvé dans aucune groupe!!, merci de contacter la scolarité");
                
                }else{    
            var result_student_id = result1.body;
            var result_group_id;
                
            for (var i = 0; i < list_students_groups.length; i++){
                if (list_students_groups[i]["id_student"] == result_student_id){    
                result_group_id = list_students_groups[i]["id_group"];
                }}
              
            var list_of_the_students; var count = 0;
            for(var i = 0; i < list_students_groups.length; i++){
                if (list_students_groups[i]["id_group"] == result_group_id){
                    list_of_the_students += "&student["+count+"]=["+ list_students_groups[i]["id_student"]+"]";
                    count++;
                }
            }
                }
                console.log("looooook here : "+ list_of_the_students);

            request.get(`http://localhost:5050/return_group_list/${list_of_the_students}`, function(err, result2){

                request.get(`http://localhost:5060/return_group_name/${result_group_id}`, function(err, result3){
                    
                    return result.json(result3.body + "\n" + result2.body);

                });
                
             });
           
        });

    });


module.exports = app;

const server = app.listen(process.env.PORT || 5080, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});