/*
 * 
 * A simple CRUD application using Node Express & MongoDB in Enide
 * Developed by: Tinniam V Ganesh
 * Date: 04 Aug 2014
 * File: New User
 */

exports.list = function(req, res){
  res.render('newuser', { title: 'Add User'});
};

