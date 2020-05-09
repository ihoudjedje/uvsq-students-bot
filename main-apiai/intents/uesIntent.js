var request = require('superagent');

module.exports.get_all_ues_i = function(type, callback){ 
        
        if(type == "tous les UEs"){
            type = "all";
        }
    
        request.get(`http://localhost:5030/service/${type}`, function(err, res){
        if(err || typeof res.body == "undefined"){
            
            return callback(`Oops!, y'avait un problème!`);
            
        }else{
            
        return callback(res.body);
        }
            
    });
}



module.exports.get_ue_info = function(type, callback){ 

        request.get(`http://localhost:5030/service/${type.toUpperCase()}`, function(err, res){
        if(res.body == ""){
            
            res.body = "Oops!, faute de frappe :o :v";
            
        }
            
            return callback(res.body);
        
        
    });
}
/*****************return from the server of Mafouz & Simo & Hamza**************************/

module.exports.get_all_ues_msh = function(type, callback){ 
    
        request.get(`http://48330379.ngrok.io/modules`, function(err, res){  
            var list_ues_json = JSON.parse(res.body);
            var list_ues = '';
            for (var i = 0; i < list_ues_json.length; i++){
      
            list_ues += "\n- " + list_ues_json[i]["intitule"];
      
            
        }
            return callback(list_ues);
        });
}
