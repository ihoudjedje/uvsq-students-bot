'use strict';

const express = require('express');
const app = express();

var list_groups = [
    {
    "name":"Groupe1",
    "id_group": 10
    },
    {
    "name":"Groupe2",
    "id_group": 21
    },
    {
    "name":"Groupe3",
    "id_group": 34
    }
];

 


app.get('/return_group_name/:group_id', (req, res) => {

var group_name_found ;
for (var i = 0; i < list_groups.length; i++){
  if (list_groups[i]["id_group"] == req.params.group_id){
      
      group_name_found = list_groups[i]["name"];
      
  }
}
      return res.json(group_name_found);
});

module.exports = app;

const server = app.listen(process.env.PORT || 5060, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});