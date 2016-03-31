/**
 * DummyController
 *
 * @description :: Server-side logic for managing dummies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res){
    res.send("Hi")
  },

  // Count

  data_count: function (req, res){
    Dummy.count({name: req.body.name}).exec(function (error, found) {
      res.send("There are "+ found + " Dummys  with this name ");
    });
  },

  // create
  createDummy: function (req, res){
    Dummy.create({name:req.body.name}).exec(function (err, createdDummy){
      if (err){
        res.send(err);
      }
      else{
        res.json(200, {message: "User created successfully ", user: createdDummy} );
      }
    });
  },

  // Delete
  deleteDummy: function (req, res){
    Dummy.findOne({name: req.body.name}).exec(function( err, findData){
      findData.destroy();
      // if (findData){       
      //   Dummy.destroy({name: req.body.name}).exec(function (err) {
      //     if (err){
      //       res.send("Record not found")
      //     }
      //     else{
      //       res.send(" Dummys with name " + req.body.name + " deleted successfully");
      //     }
      //   });
      // }
      // else
      //   res.send("No records found with the name "+ req.body.name )
    });
  },

  // FindOrCreate
  findOrCreateDummy: function (req, res){
    Dummy.findOrCreate({ name: req.body.name}).exec(function( err, data){
      res.json(200, {message: "sfd", user: data });
    });
  },

  // Query
  queryData: function (req, res){
    Dummy.query('SELECT dummy.name FROM dummy', function(err, results) {
      if (err) return res.serverError(err);
      res.send(results.rows);
    });
  },

  // Update
  updateDummy: function (req, res){
    Dummy.update({name:req.body.name}, {name1:req.body.name}).exec(function (err, updatedDummy){
      if (err){
        res.send(err);
      }
      else{
        res.json(200, {message: "User updated successfully ", user: updatedDummy} );
      }
    });
  }
};

