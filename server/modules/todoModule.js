
exports.addTodoToDatabase = function(req,endRes){

    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);
        } catch (err) {

        }

         var myTodoTxt = requestBody.todo;
         var MongoClient = require('mongodb').MongoClient;
         var url = "mongodb://localhost:27017/";
         MongoClient.connect(url, function(err,db){
             if (err) {
                 throw err;
             }
     
             // operations 
             var todoDB = db.db("todo");
             var myTodo =  { todo:myTodoTxt,ischecked:false, addDate: new Date() };
     
             todoDB.collection('todos').insertOne(myTodo, function(err,res){
                 if (err) {
                     throw err;
                 }
     
                 
                 db.close();

                 endRes.writeHead(200,{'Content-Type':'application/json'});
                 endRes.write(JSON.stringify({success:true , message: "Todo added successfully."}));
                 endRes.end();  
                })
            
            })

    });


}



exports.getAllTodos = function (req,endRes){


    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err,db){
        var todoDB = db.db("todo");

        var query = {};
        todoDB.collection('todos').find(query).toArray(function(err,res){
            if (err) {
                throw err;
            }
    
            console.log(res);
            endRes.writeHead(200,{'Content-Type':'application/json'});
            endRes.write(JSON.stringify({success:true , todos: res}));
            endRes.end();  
    
        })

    })

    

}

exports.updateTodo = function(req,endRes){
    
    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);
        } catch (err) {

        }

         var myTodoTxt = requestBody.todo;
         var MongoClient = require('mongodb').MongoClient;
         var url = "mongodb://localhost:27017/";
         MongoClient.connect(url, function(err,db){
             if (err) {
                 throw err;
             }
     
             var todo = requestBody.todo;

             // operations 
             var todoDB = db.db("todo");
            
             todoDB.collection('todos').updateOne({todo:todo},{
                $set : { ischecked : true } 
            }, function(err,res){
                db.close();
                endRes.writeHead(200,{'Content-Type':'application/json'});
                 endRes.write(JSON.stringify({success:true , message: "Todo successfully updated."}));
                 endRes.end(); 
            } )
     

            
            })

    });

}