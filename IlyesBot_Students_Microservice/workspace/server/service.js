'use strict';

const express = require('express');
const app = express();                      

var list_Students = [
    {
    "family_name":"HOUDJEDJE",
    "first_name":"Ilyes",
    "id_student": "7"
    },
    {
    "family_name":"HAMMOUDA",
    "first_name":"Farouk",
    "id_student": "1"
    },      
    {
    "family_name":"STEPHAN",
    "first_name":"Pedro",
    "id_student": "2"
    },
    {
    "family_name":"MICKEL",
    "first_name":"Platini",
    "id_student": "3"
    },
    {
    "family_name":"DIDDY",
    "first_name":"Michalon",
    "id_student": "4"
    },
    {
    "family_name":"BUNAL",
    "first_name":"Macron",
    "id_student": "5"
    },
    {
    "family_name":"DIJON",
    "first_name":"Fissier",
    "id_student": "6"
    },
    {
    "family_name":"AZZOUZI",
    "first_name":"Redouane",
    "id_student": "22"
    },
    {
    "family_name":"BEN BRAHEM",
    "first_name":"Walid",
    "id_student": "8"
    },
    {
    "family_name":"BENJELLOUN",
    "first_name":"Mohammed",
    "id_student": "9"
    },
    {
    "family_name":"BENSBAA",
    "first_name":"Mehdi",
    "id_student": "10"
    },
    {
    "family_name":"DRIDI",
    "first_name":"Aymen",
    "id_student": "11"
    },
    {
    "family_name":"JRAB",
    "first_name":"Zied",
    "id_student": "12"
    },
    {
    "family_name":"KINI",
    "first_name":"Jonathan",
    "id_student": "13"
    },
    {
    "family_name":"AURELLE",
    "first_name":"Marie",
    "id_student": "14"
    },
    {
    "family_name":"FAGEOT",
    "first_name":"Pierre",
    "id_student": "15"
    },
    {
    "family_name":"FOFANA",
    "first_name":"Bintou",
    "id_student": "16"
    },
    {
    "family_name":"FOSTIER",
    "first_name":"Nicolas",
    "id_student": "17"
    },
    {
    "family_name":"GIANFROTTA",
    "first_name":"Coline",
    "id_student": "18"
    },
    {
    "family_name":"MEGHRABI",
    "first_name":"Salah Eddine",
    "id_student": "19"
    },
    {
    "family_name":"OUEDRAOGO",
    "first_name":"Boubacar",
    "id_student": "20"
    },
    {
    "family_name":"PIEL",
    "first_name":"Cédric",
    "id_student": "21"
    }
];

app.get('/return_student_id/:student_name', (req, res, next) => {

var student_id_found ;
for (var i = 0; i < list_Students.length; i++){
  if (list_Students[i]["family_name"].toLowerCase() === req.params.student_name.toLowerCase()){
      
      student_id_found = list_Students[i]["id_student"];
      
  }
}
      return res.json(student_id_found);
});

app.get('/return_group_list/:students_array', (req, res) => {
    var students_list;
    for (var i = 0; i < req.params.students_array.length; i++){
        for(var j = 0; j < list_Students.length; j++){
    if(list_Students[j]["id_student"] === req.params.students_array[i]){
        students_list += "\n- " + list_Students[j]["family_name"] + " " + list_Students[j]["first_name"];
        }
      }
    }
    console.log("looooook here : "+ req.params.students_array[3]);
    return res.json(students_list);
});

module.exports = app;

const server = app.listen(process.env.PORT || 5050, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});