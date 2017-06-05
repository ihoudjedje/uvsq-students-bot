'use strict';

const express = require('express');
const app = express();                      

var list_UEs = [
    {
    "name":"Applications Web et Sécurité.",
    "code":"AWS",
    "ECTS":"2.5",
    "hours": "21h",
    "Coefficients":"2.5",
    "id_ue": 1
    },
    {
    "name":"Tuning des Base de données.",
    "code":"TBD",
    "ECTS":"3.5",
    "hours": "33h",
    "Coefficients":"2.5",
    "id_ue": 2
    },      
    {
    "name":"Réseaux étendus.",
    "code":"RE",
    "ECTS":"1.5",
    "hours": "25h",
    "Coefficients":"2.5",
    "id_ue": 3
    },
    {
    "name":"Méthodes de Ranking.",
    "code":"MR",
    "ECTS":"4",
    "hours": "16h",
    "Coefficients":"2.5",
    "id_ue": 4
    },
    {
    "name":"Protocoles IP.",
    "code":"PI",
    "ECTS":"4",
    "hours": "10h",
    "Coefficients":"3",
    "id_ue": 5
    },
    {
    "name":"Calcul Sécurisé.",
    "code":"CS",
    "ECTS":"4",
    "hours": "17h",
    "Coefficients":"4.5",
    "id_ue": 6
    },
    {
    "name":"Conception de la Base de Donnée.",
    "code":"CBD",
    "ECTS":"4",
    "hours": "19h",
    "Coefficients":"2.5",
    "id_ue": 7
    }
];

app.get('/service/:type', (req, res, next) => {
    if (req.params.type == "all"){

        var ues_list = '';
        for (var i = 0; i < list_UEs.length; i++){
  
        ues_list += "\n- " + list_UEs[i]["name"] + "(" + list_UEs[i]["code"] + ")";
        }

        return res.json(ues_list);
  
        }else if(req.params.type.length > 1){
            var ue_info = "";
            for (var i = 0; i < list_UEs.length; i++){
            if (list_UEs[i]["code"] == req.params.type){
            ue_info = "- Code : " + list_UEs[i]["code"] + "\n- Intitulé : " + list_UEs[i]["name"] + "\n- ECTS : " + list_UEs[i]["ECTS"] + "\n- Coefficient : " + list_UEs[i]["Coefficients"] + "\n- Houres : " + list_UEs[i]["hours"];
            }
            }
        return res.json(ue_info);
        }else{  
            var ue_info = "";
            for (var i = 0; i < list_UEs.length; i++){
            if (list_UEs[i]["id_ue"] == req.params.type){
            ue_info = "-Code : " + list_UEs[i]["code"] + "\n-Intitulé : " + list_UEs[i]["name"] + "\n-ECTS : " + list_UEs[i]["ECTS"] + "\n-Coefficient : " + list_UEs[i]["Coefficients"] + "\n-Houres : " + list_UEs[i]["hours"];
            }
            }
        return res.json(ue_info);
        
        }
});

module.exports = app;

const server = app.listen(process.env.PORT || 5030, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});