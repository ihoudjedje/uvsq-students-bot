var request = require('superagent');

module.exports.profs = function(name_prof, callback){ 
        
    
        request.get(`http://localhost:5020/service/${name_prof}`, function(err, res){
        if(err || typeof res.body == "undefined"){
            
            return callback(`Dèsolé!, M.${name_prof} n'existe pas dans ma base! :D :3 :3`);
            
        }else{
            
        return callback(res.body);
        }
            
    });
}
