'use strict';


var mongoose = require('mongoose'),
  petsInfo = mongoose.model('petShelter');

exports.listAll = function(req, res) {
  petsInfo.find({}, function(err, pets) {
    if (err)
      res.send(err);
    res.json(pets);
  });
};



exports.createNew = function(req, res) {
  var newPets = new petsInfo(req.body);
  newPets.save(function(err, pet) {
    if (err) {
		console.log(err);
		try {
			if(err.errors) {
				if(err.errors.latitude) {
					if(err.errors.latitude.message) {
						res.status(500).json("Error: "+err.errors.latitude.message);						
					}
				}
				if(err.errors.longitude) {
					if(err.errors.longitude.message) {
						res.status(500 ).json("Error: "+err.errors.longitude.message);
					}
				}
			}
			if(err.errmsg) {
				res.status(500).json("Error: Name and Breed must be unique");
			}
			else {
				res.status( err.code || 500 ).json((err === null) ? { msg: '' } : { msg: err });
			} 
		} catch(e) {
			console.log(e)
		}
		
	} else {	
		res.json(pet);
	}	
  });
};


exports.readOne = function(req, res) {
	console.log(req.params.petsId);
  petsInfo.findById(req.params.petsId, function(err, pet) {
    if (err)
      res.json(err);
    res.json(pet);
  });
};

/*
exports.updatePets = function(req, res) {
  petsInfo.findOneAndUpdate(req.params.petId, req.body, {new: true}, function(err, pet) {
    if (err)
      res.send(err);
    res.json(pet);
  });
};


exports.deletePets = function(req, res) {
  petsInfo.remove({
    _id: req.params.petId
  }, function(err, pet) {
    if (err)
      res.send(err);
    res.json({ message: 'Pet successfully deleted' });
  });
};
*/
