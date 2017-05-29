var request = require('superagent');

module.exports.get_all_ues = function(type, callback){ 
        
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
