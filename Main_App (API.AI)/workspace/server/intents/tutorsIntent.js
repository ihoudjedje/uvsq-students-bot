var request = require('superagent');

module.exports.profs_i = function(name_prof, callback){ 
    
        request.get(`http://localhost:5020/service/${name_prof}`, function(err, res){
        if(err || typeof res.body == "undefined"){
            
            return callback(`Dèsolé!, M.${name_prof} n'existe pas dans ma base! :v :3`);
            
        }else{
            
        return callback(res.body);
        }
            
    });
}

/*****************return from the server of Mafouz & Simo & Hamza**************************/

module.exports.profs_msh = function(name_prof, callback){ 
    
        request.get(`http://e680ada3.ngrok.io/enseignants`, function(err, res){  
            var list_prof_json = JSON.parse(res.body);
            var list_prof = '';
            for (var i = 0; i < list_prof_json.length; i++){
      
            list_prof += "\n- " + list_prof_json[i]["nom"] + " " + list_prof_json[i]["prenom"];
      
            
        }
            return callback(list_prof);
        });
}