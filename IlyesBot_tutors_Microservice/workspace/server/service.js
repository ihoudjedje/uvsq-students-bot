'use strict';

const express = require('express');
const app = express();

var list_profs = [
    {
    "name":"MME. Sondes Khemiri Kallel",
    "id_prof": 1
    },
    {
    "name":"M. Jean-Michel Fourneau",
    "id_prof": 2
    },
    {
    "name":"M. Abdelhak Gueroui",
    "id_prof": 3
    },      
    {
    "name":"M. Louis Goubin",
    "id_prof": 4
    },
    {
    "name":"MME. Zoubida Kedad",
    "id_prof": 5
    },
    {
    "name":"M. Stephane Lopes",
    "id_prof": 6
    },
    {
    "name":"M. Luca De Feo",
    "id_prof": 7
    }
];

 


app.get('/service/:name_prof', (req, res, next) => {
    if (req.params.name_prof == "all"){
        
        var prof_list = '';
        for (var i = 0; i < list_profs.length; i++){
  
        prof_list += "\n- " + list_profs[i]["name"];
        }

        return res.json(prof_list);
        
    }else{
var ues_list ;
for (var i = 0; i < list_profs.length; i++){
  if (list_profs[i]["name"].toLowerCase().match(req.params.name_prof.toLowerCase())){
      
      ues_list = list_profs[i]["id_prof"];
      
  }
}
      return res.json(ues_list);

}
    });

module.exports = app;

const server = app.listen(process.env.PORT || 5020, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});