/*var http  = require('http');
var DateModule = require('./myModule/DateModule');
var url = require('url');
var fs = require('fs');
var uppercase = require('upper-case');*/

//usage des custom modules
/*http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type':'text/xml'});
    res.end('<h1>hello world from nodeJS and the time is '+DateModule.getDateTime()+' </h1>');
}).listen(8080);*/


/*
http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type':'text/xml'});
    console.log(req.url);
    var x = url.parse(req.url,true).query;
    console.log(x.year);
    res.end();
}).listen(8080);
*/

/*
http.createServer( function(req,res){
    var p = url.parse(req.url,true).pathname;
    
    switch (p) {
        case '/summer':
            res.writeHead(200,{'Content-Type':'text/html'});

            fs.readFile('./templates/summer.html',function(err,data){
                if (err) {
                    throw err;
                }
                res.write(data);
                res.write( uppercase.upperCase('hello world') );
                res.end();
            });


            
            break;
        case '/winter':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1>welcome winter</h1>');
            res.end();
            break;
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1>welcome this is home page</h1>');
            res.end();
            break;
            
        default:
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write('<h1>404 not found</h1>');
            res.end();

            break;
    }



}).listen(8080);
*/

/*
const http = require('http');
const formidable = require('formidable');
const fs  = require('fs');
 
const server = http.createServer((req, res) => {
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    // parse a file upload
    const form = formidable({ multiples: true });
 
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'application/json' });
      
      // move the temp file to the requested folder
      fs.rename(files.multipleFiles.path,'./images/'+files.multipleFiles.name, function(err){
        if (err) throw err;
        //res.end(JSON.stringify({ fields, files }, null, 2));
        res.end("file uploaded successfully");
      })
      
      



    });
 
    return;
  }
 
  // show a file upload form
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});
 
server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});*/

/*

const http = require('http');
http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    
    /* getting data from server 
    var arr = [
        { name:"hello world" , decsription:"lorem" , id:3 },
        { name:"hello world" , decsription:"lorem" , id:3 },
        { name:"hello world" , decsription:"lorem" , id:3 },
        { name:"hello world" , decsription:"lorem" , id:3 },
        { name:"hello world" , decsription:"lorem" , id:3 },
        
    ];


    res.write(JSON.stringify(arr));*/



    // getting data from the client
    /*var method = req.method;
    var headers = req.headers;

    if (method === "POST") {
        if (headers['content-type'] === "application/json") {
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

                 console.log(requestBody.todo);
                 res.end();           



            });

        }else{
            res.writeHead(403,{'Content-Type':'application/json'});
            res.write(JSON.stringify({success:false , message: "access denied."}));
            res.end();
        }

    }else{
        res.writeHead(403,{'Content-Type':'application/json'});
        res.write(JSON.stringify({success:false , message: "access denied."}));
        res.end();
    }



    

}).listen(8080);*/


/////////// installing express js


const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {

    // testing mongoDB cruds

    // adding data to mongoDB collection
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err,db){
        if (err) {
            throw err;
        }

        // operations 
        var todoDB = db.db("todo");

        /* insert
        var myTodo =  { todo:"complete formation js",ischecked:false, addDate: new Date() };

        todoDB.collection('todos').insertOne(myTodo, function(err,res){
            if (err) {
                throw err;
            }

            console.log(res);
            db.close();

        })*/

        /** finding documents in todos collection 

        var query = { ischecked:true, todo:/^h/  };
        todoDB.collection('todos').find(query).toArray(function(err,res){
            if (err) {
                throw err;
            }

            console.log(res);

        })
*/

        /* sort document 
        var query = {};
        todoDB.collection('todos').find(query).sort({addDate : -1}).toArray(function(err,res){
            if (err) {
                throw err;
            }

            console.log(res);

        })
*/


        /* update documents 

        todoDB.collection('todos').updateOne({todo:"complete formation js 1"},{
            $set : { todo : "updated todo",updated : true } 
        }, function(err,res){
            console.log("1 document updated");
        } )
*/


        /** delete document */
        todoDB.collection('todos').deleteOne({ischecked:true}, function(err,res){
            console.log("1 document deleted");
        } )






        db.close();

    })


    res.send('Hello World!')
  })

  app.get('/summer', (req, res) => {
    res.send("Hello World! it's summer")
})
    

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})







