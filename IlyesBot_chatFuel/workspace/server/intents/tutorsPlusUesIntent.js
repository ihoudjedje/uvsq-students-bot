var request = require('superagent');

module.exports.get_ue_prof_info = function(name_prof, callback){ 
        
    
        request.get(`http://localhost:5040/service/${name_prof}`, function(err, res){
        if(err || typeof res.body == "undefined"){
            
        return callback("Oops! il y avait une erreur :( ");
            
        }else{
            
        return callback(res.body);
        }
            
    });
}

  

