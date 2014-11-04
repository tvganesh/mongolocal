

/**
 * Module dependencies.
 */
/*
 * 
 * A simple CRUD application using Node Express & MongoDB in Enide
 * Developed by: Tinniam V Ganesh
 * Date: 04 Aug 2014
 * File: app.js
 */

//Set the routes for the CRUD operations
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , userlist = require('./routes/userlist')
  , newuser = require('./routes/newuser')
  , adduser = require('./routes/adduser')
  , changeuser = require('./routes/changeuser')
  , updateuser = require('./routes/updateuser')
  , remuser = require('./routes/remuser')
  , deleteuser = require('./routes/deleteuser')
  , http = require('http')
  , path = require('path');

var mongodb = require('mongodb');

/*var MongoClient = mongodb.MongoClient;
var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(err) {
    console.log("failed to connect to the database");
  } else {
    console.log("connected to database");
  }
}); */

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});



// Invoke the appropriate Express middleware
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/helloworld', routes.index);
app.get('/userlist', userlist.list);
app.get('/newuser', newuser.list);
app.post('/adduser',adduser.list);
app.get('/changeuser', changeuser.list);
app.post('/updateuser', updateuser.list);
app.get('/remuser', remuser.list);
app.post('/deleteuser',deleteuser.list);


// Create Web server and listen on port 3000
http.createServer(app).listen(app.get('port'), function(){
	var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("failed to connect to the database");
	  } else {
	    console.log("connected to database");
	  }
	  
		  var collection = db.collection('phonebook');
		  
		  //Clear DB and insert 3 records
		  //collection.remove(mycallback);
		  var user1 = { "FirstName" : "Tinniam", "LastName" : "Ganesh","Mobile": "916732177728" };
		  var user2 = { "FirstName" : "Darth", "LastName" : "Vader","Mobile": "6666699999" };
		  var user3 = { "FirstName" : "Bill", "LastName" : "Shakespeare","Mobile": "8342189991" };
		  collection.insert(user1,function(err,result){});
		  collection.insert(user2,function(err,result){});
		  collection.insert(user3,function(err,result){});
		  collection.find().toArray(function(err, items) {
			  //console.log(items);
		  	
		  }); 
		 }); 
	console.log("Express server listening on port " + app.get('port'));

	  
	}); 
  