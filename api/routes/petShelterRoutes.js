'use strict';
module.exports = function(app) {
  var petShelter = require('../controllers/petShelterController');


  // petShelter Routes
  app.route('/pets')
    .get(petShelter.listAll)
    .post(petShelter.createNew);


  app.route('/pets/:petsId')
    .get(petShelter.readOne);
    //.put(petShelter.updatePets)
    //.delete(petShelter.deletePets);
};