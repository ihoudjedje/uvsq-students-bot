var request = require('superagent');

module.exports.get_student_group = function(student_name, callback){ 
        
    
        request.get(`http://localhost:5080/group/${student_name}`, function(err, res){
        if(err || typeof res.body == "undefined"){
            
        return callback("Dèsolé!, je t'ai pas trouvé dans aucune groupe!!, merci de contacter la scolarité");
            
        }else{
            
        return callback(res.body);
        }
            
    });
}

  

