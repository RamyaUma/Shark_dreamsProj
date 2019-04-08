var mysql=require('mysql');

var shared={};

shared.getConnection=function(){
    var con=mysql.createConnection({
        'host':'localhost',
        'user':'root',
        'password':'',
        'database':'reactredux'
});

return con;
}



module.exports=shared;