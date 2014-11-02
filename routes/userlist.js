var mongodb = require('mongodb');
var async = require('async');

/* GET Phone users page. */
exports.list =  function(req, res) {
	 // var db = req.db;
	var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	  if(err) {
	    console.log("Failed to connect to the database");
	  } else {
	    console.log("Connected to MongoDB");
	    console.log("0");
	  }
	
	
	  async.series([
	                
	                function(callback)
	                { 
	                	collection = db.collection('phonebook', function(error, response) {
	              	      if( error ) {
	              	          console.log(error + "  Could not connect to database-1")
	              	          console.log("2");
	              	          
	              	       }
	              	       else {
	              	          console.log("Connected to phonebook");
	              	          console.log("3");
	              	       }
	                	});
	                	callback(null, 'one');
	              	    
	                },
	                function(callback)
	                {
	                	console.log("222");
	                	collection.find().toArray(function(err, items) {
	         	           if(err) {
	         			       console.log(err + " Error getting items for display");
	         			      
	         	           }
	         	           else {
	         			      console.log(items);
	         			      res.render('userlist', 
	         					   { "userlist" : items
	         			        
	         			          }); // end res.render
	         	            } //end else
	         	          db.close();
	         	         }); // end toArray function
	                	
	                	callback(null, 'two');
	                }
	               
	             ]);
	  
	}); // end MongoClient.connect
}

